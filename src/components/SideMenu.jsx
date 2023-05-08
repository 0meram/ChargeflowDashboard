import React , {useState} from 'react'
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

const SideMenu = () => {
    const [asideActive, setAsideActive] = useState(false);

    return (
        <aside className={`aside ${asideActive ? 'active' : ''}`}>
            <h2 className="aside_title"><div><Store /></div>store name</h2>
            <ul className="aside_list">
                <li><Payment />Payments</li>
                <li><Balance />Balances</li>
                <li><Costumer />Customers</li>
                <li><Product />Products</li>
                <li><Report />Reports</li>
                <br></br>
                <li><Payment />Developers</li>
                <li><Toggle />View test data</li>
                <li><Settings />Settings
                </li>
            </ul>
        </aside>
    )
}

export default SideMenu