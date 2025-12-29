import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Badge} from 'react-bootstrap'

interface postParams {
    userId:number;
    id:number;
    title: string;
    body: string;
}

interface commentParams {
    postId:number;
    id:number;
    name: string;
    email: string;
    body: string;
}

export const postLoader = async( {params}: LoaderFunctionArgs) => {
    const postResponse = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const posts = await postResponse.json();
    
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);
    const comments = await commentsResponse.json();

    return {posts, comments};
}

function PostDetailPage() {
    const {posts, comments} = useLoaderData() as {posts:postParams, comments: commentParams[]};
    
    return (
        <>
            <h3 className="content-title">Gönderi Detayı</h3>
            <div className="post-stats">
                <div className="post-stat-item">
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Gönderi #<strong>{posts.id}</strong></span>
                </div>
                <div className="post-stat-item">
                    <i className="bi bi-person"></i>
                    <span>Kullanıcı #<strong>{posts.userId}</strong></span>
                </div>
            </div>
            
            <div className="post-item">
                <div className="post-number">{posts.id}</div>
                <div className="post-content">
                    <h4 className="post-title">{posts.title.charAt(0).toUpperCase() + posts.title.slice(1)}</h4>
                    <p className="post-body">{posts.body.charAt(0).toUpperCase() + posts.body.slice(1)}</p>
                    <div className="post-meta">
                        <Badge bg="light" className="post-badge">
                            <i className="bi bi-eye me-1"></i> Görüntülenme
                        </Badge>
                        <Badge bg="light" className="post-badge">
                            <i className="bi bi-chat-dots me-1"></i> {comments.length} Yorum
                        </Badge>
                        <Badge bg="light" className="post-badge">
                            <i className="bi bi-heart me-1"></i> Beğen
                        </Badge>
                    </div>
                </div>
            </div>

            <h3 className="content-title mt-5">Yorumlar</h3>
            <div className="comments-container">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-header">
                            <div className="comment-user">
                                <div className="user-avatar">
                                    <i className="bi bi-person-circle"></i>
                                </div>
                                <div className="user-info">
                                    <h6 className="user-name">{comment.name}</h6>
                                    <small className="user-email">{comment.email}</small>
                                </div>
                            </div>
                            <div className="comment-actions">
                                <button className="comment-action"><i className="bi bi-heart"></i></button>
                                <button className="comment-action"><i className="bi bi-reply"></i></button>
                            </div>
                        </div>
                        <div className="comment-body">
                            <p>{comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <style>{`
                .content-title {
                    margin-bottom: 1.5rem;
                    color: #2c3e50;
                    font-weight: 600;
                    text-align: center;
                }
                
                .post-stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    justify-content: center;
                }
                
                .post-stat-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f8f9fa;
                    padding: 0.7rem 1.2rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
                    border: 1px solid #e9ecef;
                }
                
                .post-stat-item i {
                    color: #2F2585;
                    font-size: 1.1rem;
                }
                
                .post-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    border: 1px solid #f1f3f5;
                    border-radius: 10px;
                    padding: 1.5rem;
                    margin-bottom: 1rem;
                    transition: all 0.3s ease;
                    background: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }
                
                .post-number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 40px;
                    height: 40px;
                    background: linear-gradient(45deg, #5c6bc0, #7986cb);
                    color: white;
                    border-radius: 50%;
                    font-weight: bold;
                    font-size: 1.1rem;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
                }
                
                .post-content {
                    flex: 1;
                }
                
                .post-title {
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    font-size: 1.3rem;
                }
                
                .post-body {
                    color: #495057;
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .post-meta {
                    display: flex;
                    gap: 0.8rem;
                    flex-wrap: wrap;
                }
                
                .post-badge {
                    padding: 0.5rem 0.8rem;
                    border-radius: 20px;
                    font-weight: normal;
                    color: #495057;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
                }
                
                .post-badge:hover {
                    background: #2F2585 !important;
                    color: white;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                
                .comments-container {
                    margin-top: 1rem;
                }
                
                .comment-item {
                    background: white;
                    border-radius: 10px;
                    padding: 1.5rem;
                    margin-bottom: 1rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    border: 1px solid #f1f3f5;
                    transition: all 0.3s ease;
                }
                
                .comment-item:hover {
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
                    transform: translateY(-2px);
                }
                
                .comment-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
                .comment-user {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }
                
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #f3f4f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .user-avatar i {
                    font-size: 1.5rem;
                    color: #5c6bc0;
                }
                
                .user-info {
                    display: flex;
                    flex-direction: column;
                }
                
                .user-name {
                    margin: 0;
                    font-weight: 600;
                    color: #2c3e50;
                    font-size: 1rem;
                }
                
                .user-email {
                    color: #6c757d;
                    font-size: 0.8rem;
                }
                
                .comment-actions {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .comment-action {
                    background: none;
                    border: none;
                    color: #6c757d;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                
                .comment-action:hover {
                    color: #2F2585;
                }
                
                .comment-body {
                    color: #495057;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                
                @media (max-width: 576px) {
                    .post-item {
                        flex-direction: column;
                    }
                    
                    .post-number {
                        align-self: flex-start;
                    }
                    
                    .comment-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .comment-actions {
                        margin-top: 0.8rem;
                    }
                }
            `}</style>
        </>
    );
}

export default PostDetailPage