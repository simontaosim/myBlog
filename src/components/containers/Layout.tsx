import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';


class Layout extends React.Component {
    render(){
        return (
            <React.Fragment>
                <header>
                    <Link to="/" className="logo">巫力格格</Link>
                    <Link to="/videos" className="button">视频</Link>
                    <Link to="/pictures" className="button">图片</Link>
                    <Link to="/music" className="button">音乐</Link>
                    <Link to="/resources" className="button">资源</Link>
                    <Link to="/tags" className="button">标签云</Link>
                    <Link to="/cates" className="button">分类</Link>
                </header>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Layout