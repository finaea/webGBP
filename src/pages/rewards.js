import React, { useState } from 'react';
import VouchersData from '../data/vouchers.json'; 
import '../styles/rewards.css'

const RewardsPage = () => {
    const [points, setPoints] = useState(200); 
    const [redeemedVouchers, setRedeemedVouchers] = useState([]);

    const handleRedeem = (voucher) => {
        if (points >= voucher.points_cost) {
            setPoints(points - voucher.points_cost);
            setRedeemedVouchers([...redeemedVouchers, voucher.name]);
        } else {
            alert('Not enough points to redeem this voucher.');
        }
    };

    return (
        <div className="rewards-page-container">
            <h1 className="heading2">Rewards Page</h1>
            <div className="points-display">You have {points} points</div>

            <div className="vouchers-list">
                {VouchersData.vouchers.slice(0, 8).map((voucher, index) => (
                    <div key={index} className="voucher-item">
                        <img 
                            src={require(`../resources/${voucher.image}`)} 
                            alt={voucher.name} 
                            className="voucher-image"
                        />
                        <h2>{voucher.name}</h2>
                        <p>{voucher.description}</p>
                        <div className="voucher-info">
                            <span>Cost: {voucher.points_cost} points</span>
                            <button 
                                onClick={() => handleRedeem(voucher)} 
                                disabled={redeemedVouchers.includes(voucher.name)}
                            >
                                {redeemedVouchers.includes(voucher.name) ? "Redeemed" : "Redeem"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardsPage;
