import React, {Component} from 'react';
    import "./New.css"
    class New extends Component {
        state = {
            image : null,
            author : '',
            place: '',
            description: '',
            hashtag: '',
        }
        handleImageChange = e => {
            this.setState({image : e.target.files[0]})
        }
        //Criamos uma função para atualizar os dados no formulário
        handleChange = e => {
            this.setState({[e.target.name] : e.target.value})
        }
        render(){
            return (
                <form id = "new-post">
                    <input type = "file"/>

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
                        placeholder = "local do post"
                        onChange = {this.handleChange}
                        value = {this.state.place}
                    />

                    <input
                        type = "text"
                        name = "place"
                        placeholder = "local do post"
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
                        name = "hashtags"
                        placeholder = "hashtags do post"
                        onChange = {this.handleChange}
                        value = {this.state.hashtag}
                    />

                    <button type = "submit">Enviar</button> 
                </form>
                )
        }
    }

export default New;