<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Registrar Network</title>
    <style>
        :root {
            --primary-bg: #0a0a1a;
            --secondary-bg: #1a1a3a;
            --accent-blue: #6be8ff;
            --accent-purple: #8a4aca;
            --text-primary: #e0e0ff;
            --text-secondary: #a0a0cc;
            --border-color: #2a2a4a;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Exo 2', sans-serif;
            background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
            color: var(--text-primary);
            line-height: 1.6;
        }
        
        .registrar-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: rgba(10, 15, 30, 0.9);
            border-bottom: 1px solid var(--border-color);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .nav-brand {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(107, 232, 255, 0.5);
        }
        
        .logo-inner {
            width: 20px;
            height: 20px;
            background: var(--primary-bg);
            border-radius: 50%;
        }
        
        .brand-text {
            display: flex;
            flex-direction: column;
        }
        
        .registrar-logo {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-blue);
            text-shadow: 0 0 5px rgba(107, 232, 255, 0.7);
        }
        
        .nav-subtitle {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }
        
        .nav-links {
            display: flex;
            gap: 25px;
            align-items: center;
        }
        
        .nav-link {
            color: var(--text-primary);
            text-decoration: none;
            font-size: 0.9rem;
            padding: 8px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .nav-link:hover {
            background: rgba(107, 232, 255, 0.1);
            color: var(--accent-blue);
        }
        
        .nav-search {
            display: flex;
            align-items: center;
            background: rgba(20, 25, 45, 0.8);
            border-radius: 25px;
            padding: 5px 15px;
            border: 1px solid var(--border-color);
        }
        
        .nav-search input {
            background: transparent;
            border: none;
            color: var(--text-primary);
            padding: 8px 12px;
            width: 250px;
            font-family: 'Exo 2', sans-serif;
        }
        
        .nav-search input:focus {
            outline: none;
        }
        
        .nav-search button {
            background: transparent;
            border: none;
            color: var(--accent-blue);
            cursor: pointer;
            padding: 5px;
        }
        
        .nav-user {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .user-info {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        
        .login-btn, .logout-btn {
            background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
            border: none;
            border-radius: 20px;
            padding: 8px 20px;
            color: var(--primary-bg);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .login-btn:hover, .logout-btn:hover {
            box-shadow: 0 0 10px rgba(107, 232, 255, 0.7);
            transform: translateY(-2px);
        }
        
        .featured-link {
            background: rgba(138, 74, 202, 0.2);
            border: 1px solid var(--accent-purple);
        }
        
        .featured-link:hover {
            background: rgba(138, 74, 202, 0.4);
            color: #e0e0ff;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 1024px) {
            .nav-search input {
                width: 180px;
            }
            
            .nav-links {
                gap: 15px;
            }
        }
        
        @media (max-width: 768px) {
            .registrar-navbar {
                flex-wrap: wrap;
                padding: 1rem;
            }
            
            .nav-brand {
                margin-bottom: 10px;
            }
            
            .nav-search {
                order: 3;
                width: 100%;
                margin-top: 10px;
            }
            
            .nav-search input {
                width: 100%;
            }
            
            .nav-links {
                order: 2;
                gap: 10px;
            }
            
            .nav-user {
                order: 1;
                margin-left: auto;
            }
            
            .user-info {
                display: none;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Exo+2:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="registrar-navbar">
        <div class="nav-brand">
            <div class="logo">
                <div class="logo-inner"></div>
            </div>
            <div class="brand-text">
                <span class="registrar-logo">Registrar</span>
                <span class="nav-subtitle">NV-432 Standard Frequency</span>
            </div>
        </div>
        
        <div class="nav-links">
            <a href="https://azphelion.github.io/registrar-site/" class="nav-link">Home</a>
            <a href="#" class="nav-link">Concord Network</a>
            <a href="#" class="nav-link">V-State Index</a>
            <a href="/regsites/scholasticae-archive/" class="nav-link featured-link">Scholasticae Archive</a>
        </div>
        
        <div class="nav-search">
            <input type="text" placeholder="Enter reg:// address or keywords">
            <button>Search</button>
        </div>
        
        <div class="nav-user">
            <span class="user-info">Guest User</span>
            <button class="login-btn">Login</button>
        </div>
    </nav>

    <script>
        // This would be replaced with your actual navbar.js functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is logged in
            const userData = localStorage.getItem('registrar_current_user');
            if (userData) {
                const user = JSON.parse(userData);
                document.querySelector('.user-info').textContent = user.fullName;
                document.querySelector('.login-btn').textContent = 'Logout';
                document.querySelector('.login-btn').classList.add('logout-btn');
                document.querySelector('.login-btn').classList.remove('login-btn');
            }
            
            // Add login/logout functionality
            document.querySelector('.login-btn, .logout-btn').addEventListener('click', function() {
                if (this.textContent === 'Login') {
                    // Show login modal
                    alert('Login modal would appear here');
                } else {
                    // Logout
                    localStorage.removeItem('registrar_current_user');
                    document.querySelector('.user-info').textContent = 'Guest User';
                    this.textContent = 'Login';
                    this.classList.add('login-btn');
                    this.classList.remove('logout-btn');
                    alert('Logged out successfully');
                }
            });
            
            // Add search functionality
            document.querySelector('.nav-search button').addEventListener('click', function() {
                const query = document.querySelector('.nav-search input').value;
                if (query) {
                    if (query.startsWith('reg://')) {
                        window.location.href = query.replace('reg://', '');
                    } else {
                        alert(`Searching for: ${query}`);
                    }
                }
            });
            
            document.querySelector('.nav-search input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    document.querySelector('.nav-search button').click();
                }
            });
        });
    </script>
</body>
</html>
