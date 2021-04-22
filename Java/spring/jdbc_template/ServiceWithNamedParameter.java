package br.com.synchro.gerprc.gerobr.parameterobligation;

import br.com.synchro.gerprc.common.exception.CustomException;
import br.com.synchro.gerprc.common.exception.EntityNotFoundException;
import br.com.synchro.gerprc.common.query.QueryUtil;
import br.com.synchro.gerprc.gerobr.obligation.ObligationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

/**
 * Service parameter from obligation.
 */
@Service
@RequiredArgsConstructor
public class ParameterObligationService {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final ParameterObligationRepository repository;
    private final ObligationService obligationService;

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * Call method from repository, responsible for find all parameters of an obligation.
     *
     * @param obrfisId id of obligation
     * @return List with all parameters.
     */
    public List<ParameterObligation> findParametersByObrfisId(Long obrfisId) {

        this.obligationService.validateObligationExist(obrfisId);
        return this.repository.findParameterObligationsByObligationId(obrfisId);
    }

    /**
     * Call method from repository, responsible for find a specific parameter of an obligation by id.
     *
     * @param obrparId id of parameter
     * @param obrfisId id of obligation
     * @return Object with one ParameterObligation
     */
    public ParameterObligation findParameterByobrparIdAndObrfisId(Long obrfisId, Long obrparId) {
        Optional<ParameterObligation> optionalParameter = this.repository.findParameterObligationByIdAndObligationId(obrparId, obrfisId);

        if (optionalParameter.isEmpty()) {

            throw new EntityNotFoundException("Parameter or Obligation not found");
        }

        return optionalParameter.get();
    }

    /**
     * Method responsible for call methods to create and execute query of list.
     *
     * @param parameterObligation object parameter obligation to use
     * @param page                page number
     * @param size                page size
     * @param parameterQuery      parameter of query if exist
     * @return List<Object [ ]> with parameters
     */
    public List<Object[]> listParametersTypeTableList(ParameterObligation parameterObligation, int page, int size, String parameterQuery, String listType, String customSearchParameters) {

        String columnUse = listType.equalsIgnoreCase("de") ? parameterObligation.getParametroTabela() : parameterObligation.getParametroTabelaPara();
        String query;
        List<Object[]> listParameters;

        if (parameterObligation.getTipo().equalsIgnoreCase("LISTA VALOR")) {
            query = buildValueListQuery(parameterObligation, columnUse);
            listParameters = this.repository.executeQuery(entityManager, query, page, size);
        } else {
            String[] whereValues = customSearchParameters == null ? new String[0] : customSearchParameters.split(" - ");
            String[] columnsExtracted = this.extractOnlyColumnsUse(columnUse);
            List<String[]> listParametersOfStrings;

            query = buildTableListQuery(columnUse, parameterQuery, whereValues, size);

            //Search first by userFilter
            listParametersOfStrings = queryTableListParameter(whereValues, columnsExtracted, query);
            if(listParametersOfStrings.size() == 0){
                String[] emptyFilter = {};
                query = buildTableListQuery(columnUse, parameterQuery, emptyFilter, size);

                listParametersOfStrings = queryTableListParameter(whereValues, columnsExtracted, query);
            }

            listParameters = new LinkedList<>();
            for (int i = 0; i < listParametersOfStrings.size(); i++) {
                String[][] aux = {listParametersOfStrings.get(i)};
                listParameters.add(aux);
            }
        }
        return listParameters;
    }

    private List<String[]> queryTableListParameter(String[] whereValues, String[] columnsExtracted, String query) {
        MapSqlParameterSource mapperSqlParameter = new MapSqlParameterSource();
        if (whereValues.length > 0) {
            for (int i = 0; i < whereValues.length; i++) {
                if(i < columnsExtracted.length){
                    mapperSqlParameter.addValue(columnsExtracted[i].toLowerCase(), whereValues[i] + "%");
                }
                else {
                    break;
                }
            }
        }
        SqlParameterSource namedParameters = mapperSqlParameter;

        return namedParameterJdbcTemplate.query(query, namedParameters, (rs, rowNum) -> {
            List<String> listSelectParameters = new LinkedList<>();
            for (String column : columnsExtracted) {
                listSelectParameters.add(rs.getString(column));
            }
            String[] arrSelectParameters = new String[listSelectParameters.size()];
            arrSelectParameters = listSelectParameters.toArray(arrSelectParameters);
            return arrSelectParameters;
        });
    }


    /**
     * Method responsible for building a query list options for parameter of type table list.
     *
     * @param columnUse      column to select from
     * @param parameterQuery parameter to use if exist
     * @return final query as string
     */
    private String buildTableListQuery(String columnUse, String parameterQuery, String[] whereValues, int size) {
        String tableName = this.extractTable(columnUse);
        String selectWithColumnsName = this.extractColumns(columnUse);
        String filter = this.extractFilter(columnUse, whereValues);
        String parameter = this.extractParameter(columnUse, parameterQuery);

        return selectWithColumnsName + tableName + filter + parameter + " FETCH FIRST " + size + " ROWS ONLY";
    }

    /**
     * Method responsible for building a query list options for parameter of type value list.
     *
     * @param parameterObligation object parameter obligation to use
     * @param columnUse           column to select from
     * @return final query as string
     */
    private String buildValueListQuery(ParameterObligation parameterObligation, String columnUse) {
        String query = "SELECT LISTA_VALOR,DESCRICAO FROM SYN_LISTA_VALORES WHERE LISTA_TIPO = '%s'";

        return String.format(query, parameterObligation.getParametroTabela());
    }

    /**
     * Method responsible for extract Table name from string.
     *
     * @param columnUse string from column use to extract
     * @return String Table name
     */
    private String extractTable(String columnUse) {

        return QueryUtil.extractFromString(columnUse, "(.*)[.]");
    }

    /**
     * Method used to return the columns used in Array.
     *
     * @param columnUse
     * @return Array with column names that will be used in the query
     */
    private String[] extractOnlyColumnsUse(String columnUse) {
        String regex = columnUse.contains(":") ? "[.](.*)[:]" : "[.](.*)";
        String filters = QueryUtil.extractFromString(columnUse, regex);
        return filters.split(",");
    }

    /**
     * Method responsible for extract column name from string.
     *
     * @param columnUse string from column use to extract
     * @return String with filter
     */
    private String extractFilter(String columnUse, String[] whereValues) {
        StringBuilder query;
        String regex = columnUse.contains(":") ? "[.](.*)[:]" : "[.](.*)";
        String filters = QueryUtil.extractFromString(columnUse, regex);
        String[] filterParameters = filters.split(",");

        if (filters.contains(",")) {
            query = new StringBuilder(String.format(" WHERE %s IS NOT NULL", filterParameters[0]));
        } else {
            query = new StringBuilder(String.format(" WHERE %s IS NOT NULL", filters));
        }

        if (whereValues.length > 0) {
            for (int i = 0; i < whereValues.length; i++) {
                if(i < filterParameters.length){
                    query.append(String.format(" AND %s like :%s", filterParameters[i].toUpperCase(), filterParameters[i].toLowerCase()));
                }
                else {
                    break;
                }
            }
        }

        if (columnUse.contains(":")) {
            regex = columnUse.contains("=") ? "[:](.*)[=]" : "[:](.*)";
            filters = QueryUtil.extractFromString(columnUse, regex);
            query.append(" AND %s");
            return String.format(query.toString(), filters);
        }

        return query.toString();
    }

    /**
     * Method responsible for extract parameters from string.
     *
     * @param columnUse string from column use to extract
     * @param parameter parameter to use if exist
     * @return string with parameter if exist
     */
    private String extractParameter(String columnUse, String parameter) {
        String query = " = '%s' ";
        String param = "";

        if (columnUse.contains("=")) {
            if (parameter.isEmpty()) {
                throw new CustomException("Parameter is required", HttpStatus.BAD_REQUEST);
            }
            return String.format(query, parameter);
        }

        return param;
    }

    /**
     * Method responsible for extract columns to use from string.
     *
     * @param columnUse string from column use to extract
     * @return string with columns
     */
    private String extractColumns(String columnUse) {

        String query = "SELECT DISTINCT %s FROM ";
        String regex = columnUse.contains(":") ? "[.](.*)[:]" : "[.](.*)";
        String columns = QueryUtil.extractFromString(columnUse, regex);

        return String.format(query, columns);
    }

}
