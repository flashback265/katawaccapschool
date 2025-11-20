
        // // Shopping cart functionality
        // document.addEventListener('DOMContentLoaded', function() {
        //     const cartCount = document.querySelector('.cart-count');
        //     const addToCartButtons = document.querySelectorAll('.btn-secondary');
            
        //     let cartItems = 0;
            
        //     addToCartButtons.forEach(button => {
        //         button.addEventListener('click', function() {
        //             cartItems++;
        //             cartCount.textContent = cartItems;
                    
        //             // Animation effect
        //             button.textContent = 'Added!';
        //             button.style.backgroundColor = 'var(--success)';
        //             button.style.borderColor = 'var(--success)';
                    
        //             setTimeout(() => {
        //                 button.textContent = 'Add to Cart';
        //                 button.style.backgroundColor = 'var(--secondary)';
        //                 button.style.borderColor = 'var(--secondary)';
        //             }, 1000);
        //         });
        //     });
            
            // Particle background effect
            const canvas = document.getElementById('particles');
            const ctx = canvas.getContext('2d');
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            const colors = ['rgba(108, 92, 231, 0.5)', 'rgba(9, 132, 227, 0.5)', 'rgba(253, 121, 168, 0.5)'];
            
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 3 + 1;
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.speedX = (Math.random() - 0.5) * 0.5;
                    this.speedY = (Math.random() - 0.5) * 0.5;
                }
                
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                }
                
                draw() {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Connect particles
                    for (let i = 0; i < particles.length; i++) {
                        const distance = Math.sqrt(
                            Math.pow(this.x - particles[i].x, 2) + 
                            Math.pow(this.y - particles[i].y, 2)
                        );
                        
                        if (distance < 100) {
                            ctx.strokeStyle = this.color.replace('0.5)', '0.1)');
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(this.x, this.y);
                            ctx.lineTo(particles[i].x, particles[i].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            
            function init() {
                for (let i = 0; i < 50; i++) {
                    particles.push(new Particle());
                }
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
                
                requestAnimationFrame(animate);
            }
            
            init();
            animate();
            
            window.addEventListener('resize', function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        // });
    