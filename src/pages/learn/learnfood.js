import React from 'react';
import '../../styles/learnfood.css'; 

const LearnFood = () => {
    return (
        <div className="container">
            <div className="heading">Learn About Malaysian Food</div>
            
            <div className="subhead">Nasi Lemak</div>
            <img
                src={require('../../resources/nasi_lemak.jpg')}
                alt="Nasi Lemak"
                className="learn-image"
            />
            <h2>Nasi Lemak: A Fragrant Delight</h2>
            <p>Nasi Lemak, a beloved national dish, is known for its aromatic coconut milk rice, served with anchovies, peanuts, boiled egg, cucumber, and spicy sambal.</p>

            <div className="subhead">Traditional Malay Eating Method</div>
            <h2>Eating with the Fingers of the Right Hand</h2>
            <p>Traditionally, Malays eat with their fingers, specifically the fingers of the right hand. This method emphasizes a tactile connection with food and is seen as a way to better enjoy the meal.</p>

            <div className="subhead">Rambutan</div>
            <img
                src={require('../../resources/rambutan.jpg')}
                alt="Rambutan"
                className="learn-image"
            />
            <h2>Rambutan: A Juicy, Hairy Fruit</h2>
            <p>Rambutan, a tropical fruit, is prized for its sweet and juicy flesh, hidden beneath a hairy red and green shell.</p>

            <div className="subhead">Ikan Bakar</div>
            <img
                src={require('../../resources/ikan_bakar.jpg')}
                alt="Ikan Bakar"
                className="learn-image"
            />
            <h2>Ikan Bakar: Grilled to Perfection</h2>
            <p>Ikan Bakar is a traditional Malay grilled fish, typically marinated with a variety of spices and then grilled over charcoal for a smoky flavor.</p>

            <div className="subhead">Char Kuey Teow</div>
            <img
                src={require('../../resources/char_kuey_teow.jpg')}
                alt="Char Kuey Teow"
                className="learn-image"
            />
            <h2>Char Kuey Teow: Stir-Fried Noodle Delicacy</h2>
            <p>Char Kuey Teow, made from flat rice noodles, is a famous stir-fried noodle dish from Malaysia, often cooked with shrimp, cockles, Chinese sausage, eggs, and bean sprouts.</p>

            <div className="subhead">Roti Canai</div>
            <img
                src={require('../../resources/roti_canai.jpg')}
                alt="Roti Canai"
                className="learn-image"
            />
            <h2>Roti Canai: The Ultimate Malaysian Breakfast</h2>
            <p>Roti Canai is a traditional Malaysian flatbread, served with dhal or curry, making for a hearty and beloved breakfast dish.</p>

            <div className="subhead">Asam Pedas</div>
            <img
                src={require('../../resources/asam_pedas.jpg')}
                alt="Asam Pedas"
                className="learn-image"
            />
            <h2>Asam Pedas: Sour and Spicy Stew</h2>
            <p>Asam Pedas, translating to 'sour spicy,' is a classic Malay dish where tamarind is the key ingredient that gives the dish its distinct sourness.</p>

            <div className="subhead">Acar</div>
            <img
                src={require('../../resources/acar.jpg')}
                alt="Acar"
                className="learn-image"
            />
            <h2>Acar: Pickled Delight</h2>
            <p>Acar is a type of pickled vegetable relish which often accompanies meals, providing a crunchy and tangy flavor contrast.</p>

            <div className="subhead">Laksa</div>
            <img
                src={require('../../resources/laksa.jpg')}
                alt="Laksa"
                className="learn-image"
            />
            <h2>Laksa: Spicy Noodle Soup</h2>
            <p>Laksa is a spicy noodle soup popular in Malaysia, made with a rich and savory coconut milk base, seasoned with seafood or chicken and aromatic herbs.</p>
        </div>
    );
};

export default LearnFood;
