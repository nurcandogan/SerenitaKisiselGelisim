import React, { useState } from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Badge, ProgressBar, Form, Button } from 'react-bootstrap';

interface TodoParams {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const userTodosLoader = async({params} : LoaderFunctionArgs) => {
    const response = await fetch ( `https://jsonplaceholder.typicode.com/users/${params.userId}/todos`);
    const todos = await response.json();
    return todos;
}

function UsersTodosPage() {
    const todos = useLoaderData() as TodoParams[];
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    
    // İstatistikler hesaplanıyor
    const completedCount = todos.filter(todo => todo.completed).length;
    const activeCount = todos.length - completedCount;
    const completionRate = Math.round((completedCount / todos.length) * 100);
    
    // Filtreleme
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    
    return (
        <>
            <h3 className="content-title">Yapılacaklar Listesi</h3>
            
            {/* İstatistik Paneli */}
            <div className="todo-stats">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-value">{todos.length}</div>
                        <div className="stat-label">Toplam</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value completed-color">{completedCount}</div>
                        <div className="stat-label">Tamamlanan</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value pending-color">{activeCount}</div>
                        <div className="stat-label">Bekleyen</div>
                    </div>
                </div>
                <div className="progress-container">
                    <ProgressBar 
                        now={completionRate} 
                        variant={completionRate > 75 ? "success" : completionRate > 25 ? "info" : "warning"}
                        className="progress-custom"
                    />
                    <div className="progress-text">%{completionRate} Tamamlandı</div>
                </div>
            </div>
            
            {/* Filtre Butonları */}
            <div className="filter-buttons">
                <Button 
                    variant={filter === 'all' ? 'primary' : 'light'}
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Tümü ({todos.length})
                </Button>
                <Button 
                    variant={filter === 'active' ? 'primary' : 'light'}
                    className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    Bekleyen ({activeCount})
                </Button>
                <Button 
                    variant={filter === 'completed' ? 'primary' : 'light'}
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Tamamlanan ({completedCount})
                </Button>
            </div>
            
            {/* Yapılacaklar Listesi */}
            <ul className="content-list todo-list">
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className={`content-item todo-item-card ${todo.completed ? 'completed-card' : 'pending-card'}`}>
                        <div className="todo-item">
                            <div className="todo-checkbox-container">
                                <Form.Check 
                                    type="checkbox" 
                                    checked={todo.completed} 
                                    readOnly 
                                    className="todo-checkbox-custom"
                                />
                            </div>
                            <div className="todo-content">
                                <div className={`todo-title ${todo.completed ? 'completed-text' : ''}`}>
                                    {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
                                </div>
                                <div className="todo-meta">
                                    <Badge 
                                        bg={todo.completed ? 'success' : 'warning'} 
                                        className="status-badge"
                                    >
                                        {todo.completed ? 'Tamamlandı' : 'Bekliyor'}
                                    </Badge>
                                    <span className="todo-id">#{todo.id}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
            <style>{`
                .todo-stats {
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    border: 1px solid #e9ecef;
                }
                
                .stats-container {
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }
                
                .stat-item {
                    padding: 0 1rem;
                }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2F2585;
                    margin-bottom: 0.3rem;
                }
                
                .completed-color {
                    color: #2BDEAC;
                }
                
                .pending-color {
                    color: #F028FD;
                }
                
                .stat-label {
                    font-size: 0.85rem;
                    color: #6c757d;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .progress-container {
                    text-align: center;
                }
                
                .progress-custom {
                    height: 0.8rem;
                    border-radius: 20px;
                    margin-bottom: 0.5rem;
                }
                
                .progress-text {
                    font-size: 0.9rem;
                    color: #6c757d;
                }
                
                .filter-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 0.8rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }
                
                .filter-btn {
                    border-radius: 20px;
                    font-size: 0.9rem;
                    padding: 0.5rem 1.2rem;
                    border: none;
                    transition: all 0.3s ease;
                }
                
                .filter-btn.active {
                    background: linear-gradient(45deg, #2BDEAC, #F028FD);
                    color: white;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                
                .todo-list {
                    padding: 0;
                }
                
                .todo-item-card {
                    border-radius: 10px;
                    padding: 1.2rem;
                    margin-bottom: 1rem;
                    border: 1px solid #e9ecef;
                    background: white;
                    transition: all 0.3s ease;
                }
                
                .todo-item-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(0,0,0,0.05);
                }
                
                .completed-card {
                    border-left: 4px solid #2BDEAC;
                }
                
                .pending-card {
                    border-left: 4px solid #F028FD;
                }
                
                .todo-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }
                
                .todo-checkbox-container {
                    padding-top: 0.2rem;
                }
                
                .todo-checkbox-custom {
                    width: 1.2rem;
                    height: 1.2rem;
                }
                
                .form-check-input:checked {
                    background-color: #2BDEAC;
                    border-color: #2BDEAC;
                }
                
                .todo-content {
                    flex: 1;
                }
                
                .todo-title {
                    font-size: 1rem;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                }
                
                .completed-text {
                    text-decoration: line-through;
                    color: #adb5bd;
                }
                
                .todo-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .status-badge {
                    font-weight: normal;
                    padding: 0.35rem 0.8rem;
                    border-radius: 20px;
                }
                
                .todo-id {
                    font-size: 0.8rem;
                    color: #adb5bd;
                }
                
                @media (max-width: 576px) {
                    .stats-container {
                        flex-direction: column;
                        gap: 1.2rem;
                    }
                    
                    .filter-buttons {
                        gap: 0.5rem;
                    }
                    
                    .filter-btn {
                        font-size: 0.8rem;
                        padding: 0.4rem 0.8rem;
                    }
                }
            `}</style>
        </>
    )
}

export default UsersTodosPage