import React from "react";
import Button from "../Button/button";
import StaticFooter from "../StaticFooter/staticfooter";
import "./premiumhero.scss";

export default function PremiumHero() {
  return (
    <div className="premium">
      <div className="premium__hero">
        <div className="premium__info">
          <img
            className="premium__image"
            alt="premiumhero"
            src="/premium/premium.svg"
          />
          <p>
            Reddit Premium gives you an ad-free experience, special benefits,
            and directly supports Reddit. The more Reddit is user-supported, the
            freer we are to make Reddit the best it can be.
          </p>
          <Button text="Get Reddit Premium" color="orange"></Button>
        </div>
      </div>
      <div className="subsection">
        <h1 className="subsection__header">Join Reddit Premium Today</h1>
        <div className="benefits">
          <div className="benefits__info">
            <ul className="benefits__list">
              <li className="benefits__point">Ads-free experience</li>
              <li className="benefits__point">700 Coins every month</li>
            </ul>
            <img
              className="benefits__image"
              src="https://www.redditstatic.com/desktop2x/img/gold/crest-with-background.jpg"
            ></img>
            <Button text="$5.99/Month" color="orange"></Button>
            <div className="benefits__gift">
              <p>1,000 Coins Sign Up Gift</p>
            </div>
          </div>
          <div>
            <h3>Subscription automatically renews monthly</h3>
            <h3>
              <a href="#">REDEEM A GIFT CODE</a>
            </h3>
          </div>
          <div>
            <h2>Reddit Premium FAQ</h2>
          </div>
          <div>
            <h3>What is a Reddit Premium Membership?</h3>
            <h3>
              Why change the name to Premium? What happened to calling it Gold?
            </h3>
            <h3>
              What if I was subscribed to the old Gold Membership Program?
            </h3>
            <h3>The Premium membership gives me Coins, what are those for?</h3>
            <h3>Do I have to subscribe to Reddit Premium to get Coins?</h3>
          </div>
        </div>
      </div>
      <StaticFooter />
    </div>
  );
}
