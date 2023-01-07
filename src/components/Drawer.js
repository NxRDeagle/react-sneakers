function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>

                <div className="Items">
                    <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex">
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ
                            <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;