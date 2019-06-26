import React, {Component} from 'react';
import api from "../services/api"

import "./New.css"

class New extends Component {
    state = {
        image : null,
        author : '',
        place: '',
        description: '',
        hashtag : '',
    }
    
    //Fazer a funcao ser assincrona
    handleSubmit = async e => {
        //Por default o react só att a página, tiramos esse comportamento com a func:
        e.preventDefault();

        //Como não estamos apenas um JSON, mas sim um multipart form data para enviar img
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtag', this.state.hashtag);

        await api.post('posts', data)

        //Colocamos no histórico do usuário uma nova rota para ele ir
        this.props.history.push('/')
    }

    //Para a imagem, o seu imput vem em formato de array de arrays, sendo o primeiro
    //elemento com o valor da imagem, logo precisa desse tratamento diferenciado
    handleImageChange = e => {
        this.setState({image : e.target.files[0]})
    }
    
    //Criamos esse método através de uma arrowfunction, pois se fosse um método normal o 
    //this não estaria acessável para essa funcao Custom. Essa função vai pegar o input 
    //e correspondente de mesmo nome no JSON
    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    render(){
        return (
            <form id = "new-post" onSubmit = {this.handleSubmit}>
                <input type = "file" onChange = {this.handleImageChange}/>

                <input
                    type = "text"
                    name = "author"
                    placeholder = "Autor do post"
                    onChange = {this.handleChange}
                    value = {this.state.author}
                />

                <input
                    type = "text"
                    name = "place"
                    placeholder = "Local do post"
                    onChange = {this.handleChange}
                    value = {this.state.place}
                />

                <input
                    type = "text"
                    name = "description"
                    placeholder = "Descrição do post"
                    onChange = {this.handleChange}
                    value = {this.state.description}
                />

                <input
                    type = "text"
                    name = "hashtag"
                    placeholder = "Hashtags do post"
                    onChange = {this.handleChange}
                    value = {this.state.hashtag}
                />

                <button type = "submit">Enviar</button> 
            </form>
            )
    }
}

export default New;