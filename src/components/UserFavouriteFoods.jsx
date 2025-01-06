import { createElement } from "react";
import styles from "./users.module.scss";

export function UserFavouriteFoods() {
    return createElement('section', null,
        <div>
            <span className={styles.foodsTitle}>Favourite Foods:</span>
            <br />
            <ul>
                <li>Pizza</li>
                <li>Burgers</li>
                <li>Shawarma</li>
            </ul>
        </div>)
}