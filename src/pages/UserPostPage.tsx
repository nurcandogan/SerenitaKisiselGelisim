import React from 'react'
import { Link, LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

interface UserPostParams{
    userId: number;
    id: number;
    title: string;
    body?: string;
}

export const userPostLoader = async ({params }: LoaderFunctionArgs) => { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
    const posts = await response.json();
    return posts;
}

function UserPostPage() {
    const posts = useLoaderData() as UserPostParams[];
    const {userId} = useParams(); 
    
    // İçerik özeti oluştur
    const getExcerpt = (body?: string) => {
        if (!body) return "";
        return body.substring(0, 50) + "...";
    };
    
    return (
        <>    
            <h3 className="content-title">Paylaşılan Gönderiler</h3>
            <div className="post-stats">
                <div className="post-stat-item">
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Toplam Gönderi: <strong>{posts.length}</strong></span>
                </div>
                <div className="post-stat-item">
                    <i className="bi bi-calendar-check"></i>
                    <span>Son Güncelleme: <strong>Bugün</strong></span>
                </div>
            </div>
            <ul className="content-list">
                {posts.map((post) => (
                    <li key={post.id} className="content-item post-item">
                        <div className="post-number">{post.id}</div>
                        <div className="post-content">
                            <Link to={`/users/${userId}/posts/${post.id}`} className="content-link">
                                <h5 className="post-title">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h5>
                            </Link>
                            <p className="post-excerpt">{getExcerpt(post.body)}</p>
                            <div className="post-meta">
                                <Badge bg="light" className="post-badge">
                                    <i className="bi bi-eye me-1"></i> Görüntüle
                                </Badge>
                                <Badge bg="light" className="post-badge">
                                    <i className="bi bi-chat-dots me-1"></i> Yorumlar
                                </Badge>
                                <Badge bg="light" className="post-badge">
                                    <i className="bi bi-heart me-1"></i> Beğen
                                </Badge>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <style>{`
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
                    border-radius: 10px !important;
                    padding: 1.5rem !important;
                    margin-bottom: 1rem;
                    transition: all 0.3s ease;
                    background: white;
                }
                
                .post-item:hover {
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
                    transform: translateY(-3px) !important;
                    border-color: #e9ecef;
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
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                    transition: color 0.3s ease;
                }
                
                .post-title:hover {
                    color: #2F2585;
                }
                
                .post-excerpt {
                    color: #6c757d;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    line-height: 1.5;
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
                
                @media (max-width: 576px) {
                    .post-item {
                        flex-direction: column;
                    }
                    
                    .post-number {
                        align-self: flex-start;
                    }
                }
            `}</style>
        </>
    )
}

export default UserPostPage