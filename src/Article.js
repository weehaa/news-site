import React, {Component} from 'react'
import CommentList from "./CommentList"
import Comment from "./Comment"

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }
    render() {
        const {article} = this.props
        const {isOpen} = this.state
        //console.log('---' + isOpen)
        return (
            <div>
                {/*{(new Date).toLocaleString()}*/}
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}


            </div>
        )
    }

    getBody() {

        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}{this.getComments()}</section>

    }

    getComments() {
        const {article} = this.props
        if (!('comments' in article)) return null
        return <CommentList comments = {article.comments}/>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        //console.log('---' + this.state.isOpen)
    }
}



// export default function Article(props) {
//     const {article} = props
//     console.log('---', props)
//     return (
//         <div>
//             <h3>
//                 {article.title}
//             </h3>
//             <section>
//                 {article.text}
//             </section>
//         </div>
//     )
// }