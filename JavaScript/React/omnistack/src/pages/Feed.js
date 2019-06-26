import React, {Component} from 'react';
import io from 'socket.io-client';

import more from './../assets/more.svg';
import like from './../assets/like.svg';
import comment from './../assets/comment.svg';
import send from './../assets/send.svg';

import api from './../services/api';

import './Feed.css';

class Feed extends Component {
    //Variável da classe que pode ir se alterando no nosso componente renderizado
    state = {
        feed : [], 
    };

    //Método que é chamado como um construtor do componente
    async componentDidMount(){
        //Esse método ativa o protocolo socket.io para ficar ouvindo mudanças no servidor
        this.registerToSocket();

        //Para fazer um get é bem tranquili, basta colocar o string do caminho e o método
        const response = await api.get('posts');

        this.setState({feed : response.data})
    }

    registerToSocket = () => {
        //Primeiro a gente se conecta
        const socket = io("http://localhost:3333");

        //Agora a gente pega os novos posts e concatena com os antigos já salvos no front
        //O servidor manda duas mensagens, post, quando um novo post é cadastrado e
        //like, quando novo like
        socket.on('post', newPost => {
            this.setState({feed : [ newPost, ... this.state.feed]})
        })

        socket.on('like', likedPost => {
            this.setState({feed : this.state.feed.map(post => {
                        return post._id === likedPost._id ? likedPost : post; 
                    }
                )
            });
        })
    }

    handleLike = id => {
        api.post("/posts/" + id + "/like")
    }

    render(){
        return (
            <section id = "post-list">
                {this.state.feed.map(post => (
                <article key = {post._id} >
                {/* 
                vamos montar aqui a estrutura básica de como seria as tags no post do html
                definindo sua estrutura.
                */}
                    <header>
                        <div className = "user-info">
                            <span>{post.author}</span>
                            <span className = "place">{post.place}</span>
                        </div>
                        <img src = {more} alt = "Mais"/>
                    </header>
                    <img src = {"http://localhost:3333/files/" + post.image}/>
                    <footer>
                        <div className = "actions">
                        {/* Fazemos esse () => para ele passar o ponteiro da função  
                        com esse parametro e não executala de uma vez*/}
                            <button type = "button" onClick = {() => this.handleLike(post._id)}>
                                <img src = {like} alt = "like"/>
                            </button>
                            <img src = {comment} alt = "comment"/>
                            <img src = {send} alt = "send"/>

                            <strong>{post.likes} curtida</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtag}</span>
                            </p>
                        </div>
                    </footer>
                </article>
                ))}
                

            </section>
        )
    }
}

export default Feed;