import React from "react";

function MenuSection() {
    const styles = {
        pText: {
            color: 'rgb(118,118,118)',
            fontSize : "small"
        }
    }

    return (
            <div id="menu">
                <div>
                    <h1>Our Menu</h1><br/>
                    <h5>Bread Basket</h5>
                    <p style={styles.pText}>Assortment of fresh baked fruit breads and muffins 5.50</p><br/>

                    <h5>Honey Almond Granola with Fruits</h5>
                    <p style={styles.pText}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br/>

                    <h5>Belgian Waffle</h5>
                    <p style={styles.pText}>Vanilla flavored batter with malted flour 7.50</p><br/>

                    <h5>Scrambled eggs</h5>
                    <p style={styles.pText}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br/>

                    <h5>Blueberry Pancakes</h5>
                    <p style={styles.pText}>With syrup, butter and lots of berries 8.50</p>
                </div>
            </div>
    )
}

export default MenuSection;