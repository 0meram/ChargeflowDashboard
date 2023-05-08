import React, { useState } from 'react'
import { ReactComponent as Payment } from '../icons/payments.svg';
import { ReactComponent as Balance } from '../icons/balance.svg';
import { ReactComponent as Product } from '../icons/product.svg';
import { ReactComponent as Settings } from '../icons/settings.svg';
import { ReactComponent as Store } from '../icons/store.svg';
import { ReactComponent as Toggle } from '../icons/toggle.svg';
import { ReactComponent as Account } from '../icons/acounts.svg';
import { ReactComponent as Report } from '../icons/report.svg';
import { ReactComponent as Developer } from '../icons/developer.svg';
import { ReactComponent as Costumer } from '../icons/costumers.svg';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import { ReactComponent as Home } from '../icons/home.svg';

const SideMenu = () => {
    const [asideActive, setAsideActive] = useState(false);

    return (
        <aside className={`aside ${asideActive ? 'active' : ''}`}>
            <h2 className="aside_title"><div><Store /></div>store name<Arrow /></h2>
            <ul className="aside_list">
                <div><Home /><li>Home</li></div>
                <br />
                <div><Payment /><li>Payments</li></div>
                <div><Balance /><li>Balances</li></div>
                <div><Costumer /><li>Customers</li></div>
                <div><Account /><li>Connected accounts</li></div>
                <div><Product /><li>Products</li></div>
                <div><Report /><li>Reports</li></div>
                <br />
                <div><Payment /><li>Developers</li></div>
                <div><Toggle /><li>View test data</li></div>
                <div><Settings /><li>Settings</li></div>
            </ul>
        </aside>
    )
}

export default SideMenu