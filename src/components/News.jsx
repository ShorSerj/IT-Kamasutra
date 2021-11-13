const News = () => {
    return (
        <div className="news-container">
            <div className="status-bar">
                <span>What’s on you mind, Paul?</span>
                <div className="arrow">
                    <div className=""></div>
                </div>
            </div>
            <section >
                <article className="post-container">
                    
                    <div className="post">
                    <header className="author">
                        <img src="https://fotosuvenir46.ru/components/com_jshopping/files/img_products/kovrik_krugliy_4.jpg" alt="author" />
                        <div className="author-inform">
                            <h3 className="author-name">Thomas Ben</h3>
                            <span className="time-post">45 mins ago</span>
                        </div>
                    </header>
                    <div className="post-content">
                        <p>
                        Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. 
                        </p>
                    </div>
                    <footer className="post-reviews">
                        <div className="reviews-container">
                            <div className="reviews-wrapp">
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4732 8.10051C12.4732 8.10051 13.8599 6.29726 13.7278 3.74461C13.5737 1.16854 12.4072 0.77042 11.6809 0.864096C10.9545 0.934352 10.8665 3.90854 10.8665 3.90854C10.8665 3.90854 7.43288 6.27385 7.12474 10.5595C6.81659 14.8451 7.12474 19.1542 7.12474 19.1542H16.6112C16.6332 19.1542 16.6552 19.1542 16.6772 19.1542C17.4916 19.1542 18.7241 18.4048 17.7777 16.7889C18.8122 15.9927 18.394 14.4002 17.9538 13.9318C18.7462 13.4634 18.9663 11.8241 17.9538 11.0513C18.9883 10.0443 18.9222 8.49863 17.6897 8.10051C16.4351 7.70239 12.4732 8.10051 12.4732 8.10051Z" fill="#788292"/>
                                <path d="M5.51799 20.2315H0.983874C0.873822 20.2315 0.763771 20.1378 0.763771 19.9973V10.2316C0.763771 10.0911 0.873822 9.99744 0.983874 9.99744H5.51799C5.62804 9.99744 5.73809 10.0911 5.73809 10.2316V19.9739C5.73809 20.1144 5.65005 20.2315 5.51799 20.2315Z" fill="#788292"/>
                                </svg>
                                <span className="wrapp-counter">4</span>
                            </div>
                            <div className="reviews-wrapp">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2494 0.379333H3.19441C1.8958 0.379333 0.83931 1.50344 0.83931 2.88515V12.2995C0.83931 13.6812 1.8958 14.8053 3.19441 14.8053H4.44899V18.3416C4.44899 18.646 4.77915 18.7865 4.97724 18.5758L8.78502 14.8053H18.2714C19.5701 14.8053 20.6265 13.6812 20.6265 12.2995V2.88515C20.6045 1.50344 19.548 0.379333 18.2494 0.379333ZM12.8789 10.871C12.8789 11.0583 12.7249 11.2223 12.5488 11.2223H4.69111C4.51503 11.2223 4.36095 11.0583 4.36095 10.871V10.707C4.36095 10.5197 4.51503 10.3558 4.69111 10.3558H12.5488C12.7249 10.3558 12.8789 10.5197 12.8789 10.707V10.871ZM16.6867 8.22464H4.77915C4.55904 8.22464 4.36095 8.03729 4.36095 7.77968C4.36095 7.52208 4.53703 7.33473 4.77915 7.33473H16.6867C16.9068 7.33473 17.1049 7.52208 17.1049 7.77968C17.1049 8.03729 16.9068 8.22464 16.6867 8.22464ZM16.6867 5.22703H4.77915C4.55904 5.22703 4.36095 5.03968 4.36095 4.78207C4.36095 4.52447 4.53703 4.33712 4.77915 4.33712H16.6867C16.9068 4.33712 17.1049 4.52447 17.1049 4.78207C17.1049 5.03968 16.9068 5.22703 16.6867 5.22703Z" fill="#788292"/>
                            </svg>
                            <span className="wrapp-counter">3</span>
                            </div>
                            <div className="reviews-wrapp">
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6647 14.6578C14.8724 14.6578 14.146 15.0091 13.6178 15.5477L6.70654 10.7703C6.70654 10.7 6.70654 10.6063 6.70654 10.5361C6.70654 10.4658 6.70654 10.419 6.70654 10.3487L13.7718 5.66497C14.2781 6.13334 14.9604 6.41437 15.6867 6.41437C17.3155 6.41437 18.6361 5.00924 18.6361 3.27625C18.6361 1.54325 17.3155 0.138123 15.6867 0.138123C14.058 0.138123 12.7374 1.54325 12.7374 3.27625C12.7374 3.53385 12.7594 3.76804 12.8254 4.00223L6.02422 8.52206C5.47397 7.84292 4.6816 7.39796 3.77918 7.39796C2.15042 7.39796 0.829803 8.80309 0.829803 10.5361C0.829803 12.2691 2.15042 13.6742 3.77918 13.6742C4.65959 13.6742 5.45196 13.2527 6.00222 12.5969L12.7814 17.3041C12.7594 17.4681 12.7374 17.632 12.7374 17.8193C12.7374 19.5523 14.058 20.9575 15.6867 20.9575C17.3155 20.9575 18.6361 19.5523 18.6361 17.8193C18.6141 16.0629 17.2935 14.6578 15.6647 14.6578Z" fill="#788292"/>
                            </svg>
                            <span className="wrapp-counter">1</span>
                            </div>
                            </div>
                        </footer>
                        </div>
                    </article>
                    <article className="post-container">
                        <div className="post">
                        <header className="author">
                            <img src="https://colla-gen.ru/wp-content/uploads/2020/07/8be83f79f3e383be815396d4b97b8d62.png" alt="author" />
                            <div className="author-inform">
                                <h3 className="author-name">Miranda Shaffer</h3>
                                <span className="time-post">June 21, 12:45 pm</span>
                            </div>
                        </header>
                        <div className="post-content">
                            <p>
                            Having fun while cooking and eating variety of foods with <a href="#">@Sarah</a>
                            </p>
                            <div className="post-images">
                                <figure class="gallery__item">
                                    <img class="gallery__img" src="https://img5.goodfon.ru/original/1920x1408/d/ac/pirozhnoe-iagody-biskvit-shokoladnoe.jpg" alt="" />
                                </figure>
                                <figure class="gallery__item">
                                    <img class="gallery__img" src="https://mykaleidoscope.ru/uploads/posts/2021-09/1632845699_32-mykaleidoscope-ru-p-pirozhnoe-blazhenstvo-krasivo-foto-33.jpg" alt="" />
                                </figure>
                                <figure class="gallery__item">
                                    <img class="gallery__img" src="https://mykaleidoscope.ru/uploads/posts/2020-01/1579911305_4-p-pirozhnie-s-vishenkoi-6.png" alt="" />
                                </figure> 
                            </div>
                        </div>
                        <footer className="post-reviews">
                            <div className="reviews-container">
                                <div className="reviews-wrapp">
                                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4732 8.10051C12.4732 8.10051 13.8599 6.29726 13.7278 3.74461C13.5737 1.16854 12.4072 0.77042 11.6809 0.864096C10.9545 0.934352 10.8665 3.90854 10.8665 3.90854C10.8665 3.90854 7.43288 6.27385 7.12474 10.5595C6.81659 14.8451 7.12474 19.1542 7.12474 19.1542H16.6112C16.6332 19.1542 16.6552 19.1542 16.6772 19.1542C17.4916 19.1542 18.7241 18.4048 17.7777 16.7889C18.8122 15.9927 18.394 14.4002 17.9538 13.9318C18.7462 13.4634 18.9663 11.8241 17.9538 11.0513C18.9883 10.0443 18.9222 8.49863 17.6897 8.10051C16.4351 7.70239 12.4732 8.10051 12.4732 8.10051Z" fill="#788292"/>
                                    <path d="M5.51799 20.2315H0.983874C0.873822 20.2315 0.763771 20.1378 0.763771 19.9973V10.2316C0.763771 10.0911 0.873822 9.99744 0.983874 9.99744H5.51799C5.62804 9.99744 5.73809 10.0911 5.73809 10.2316V19.9739C5.73809 20.1144 5.65005 20.2315 5.51799 20.2315Z" fill="#788292"/>
                                    </svg>
                                    <span className="wrapp-counter">4</span>
                                </div>
                                <div className="reviews-wrapp">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2494 0.379333H3.19441C1.8958 0.379333 0.83931 1.50344 0.83931 2.88515V12.2995C0.83931 13.6812 1.8958 14.8053 3.19441 14.8053H4.44899V18.3416C4.44899 18.646 4.77915 18.7865 4.97724 18.5758L8.78502 14.8053H18.2714C19.5701 14.8053 20.6265 13.6812 20.6265 12.2995V2.88515C20.6045 1.50344 19.548 0.379333 18.2494 0.379333ZM12.8789 10.871C12.8789 11.0583 12.7249 11.2223 12.5488 11.2223H4.69111C4.51503 11.2223 4.36095 11.0583 4.36095 10.871V10.707C4.36095 10.5197 4.51503 10.3558 4.69111 10.3558H12.5488C12.7249 10.3558 12.8789 10.5197 12.8789 10.707V10.871ZM16.6867 8.22464H4.77915C4.55904 8.22464 4.36095 8.03729 4.36095 7.77968C4.36095 7.52208 4.53703 7.33473 4.77915 7.33473H16.6867C16.9068 7.33473 17.1049 7.52208 17.1049 7.77968C17.1049 8.03729 16.9068 8.22464 16.6867 8.22464ZM16.6867 5.22703H4.77915C4.55904 5.22703 4.36095 5.03968 4.36095 4.78207C4.36095 4.52447 4.53703 4.33712 4.77915 4.33712H16.6867C16.9068 4.33712 17.1049 4.52447 17.1049 4.78207C17.1049 5.03968 16.9068 5.22703 16.6867 5.22703Z" fill="#788292"/>
                                </svg>
                                <span className="wrapp-counter">3</span>
                                </div>
                                <div className="reviews-wrapp">
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6647 14.6578C14.8724 14.6578 14.146 15.0091 13.6178 15.5477L6.70654 10.7703C6.70654 10.7 6.70654 10.6063 6.70654 10.5361C6.70654 10.4658 6.70654 10.419 6.70654 10.3487L13.7718 5.66497C14.2781 6.13334 14.9604 6.41437 15.6867 6.41437C17.3155 6.41437 18.6361 5.00924 18.6361 3.27625C18.6361 1.54325 17.3155 0.138123 15.6867 0.138123C14.058 0.138123 12.7374 1.54325 12.7374 3.27625C12.7374 3.53385 12.7594 3.76804 12.8254 4.00223L6.02422 8.52206C5.47397 7.84292 4.6816 7.39796 3.77918 7.39796C2.15042 7.39796 0.829803 8.80309 0.829803 10.5361C0.829803 12.2691 2.15042 13.6742 3.77918 13.6742C4.65959 13.6742 5.45196 13.2527 6.00222 12.5969L12.7814 17.3041C12.7594 17.4681 12.7374 17.632 12.7374 17.8193C12.7374 19.5523 14.058 20.9575 15.6867 20.9575C17.3155 20.9575 18.6361 19.5523 18.6361 17.8193C18.6141 16.0629 17.2935 14.6578 15.6647 14.6578Z" fill="#788292"/>
                                </svg>
                                <span className="wrapp-counter">1</span>
                            </div>
                        </div>
                    </footer>
                    </div>
                </article>

            </section>
        </div>
    )
}

export default News