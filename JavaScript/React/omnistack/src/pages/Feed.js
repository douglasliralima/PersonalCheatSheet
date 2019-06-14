import React, {Component} from 'react';
import './Feed.css';
import more from './../assets/more.svg';
import like from './../assets/like.svg';
import comment from './../assets/comment.svg';
import send from './../assets/send.svg';
import api from './../services/api'
    class Feed extends Component {
        //Variável da classe que pode ir se alterando no nosso componente renderizado
        state = {
            feed : [], 
        };
        //Método que é chamado como um construtor do componente
        async componentDidMount(){
            //Para fazer um get é bem tranquili, basta colocar o string do caminho e o método
            const response = await api.get('posts');

            this.setState({feed : response.data})

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
                                <img src = {like} alt = "like"/>
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