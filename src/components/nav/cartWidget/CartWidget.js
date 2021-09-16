const CartWidget = () => {
    const cantidad =0
    return (
        <>
        <div className="navWidget">
        <div className="widgetIcon">
        <a href="index.html" id="cartIcon" className="material-icons">shopping_cart</a>
        <div className="widgetNumber">
            {cantidad}
        </div>
        </div>
        </div>
        </>
    );
}

export default CartWidget;