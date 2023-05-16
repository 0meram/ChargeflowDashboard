import React from 'react'
import { ReactComponent as Payment } from '../icons/payments.svg'
import { ReactComponent as Balance } from '../icons/balance.svg'
import { ReactComponent as Product } from '../icons/product.svg'
import { ReactComponent as Settings } from '../icons/settings.svg'
import { ReactComponent as Store } from '../icons/store.svg'
import { ReactComponent as Toggle } from '../icons/toggle.svg'
import { ReactComponent as Account } from '../icons/acounts.svg'
import { ReactComponent as Report } from '../icons/report.svg'
import { ReactComponent as Costumer } from '../icons/costumers.svg'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as Home } from '../icons/home.svg'
import '../style/aside.css'

const SideMenu = () => {
    return (
        <aside className="aside">
            <div className="aside_title">
                <span>
                    <Store />
                </span>
                <div>Store name</div>
                <Arrow />
            </div>
            <ul className="aside_list">
                <div>
                    <Home />
                    <li>Home</li>
                </div>
                <br />
                <div>
                    <Payment />
                    <li>Payments</li>
                </div>
                <div>
                    <Balance />
                    <li>Balances</li>
                </div>
                <div>
                    <Costumer />
                    <li>Customers</li>
                </div>
                <div>
                    <Account />
                    <li>Connected accounts</li>
                </div>
                <div>
                    <Product />
                    <li>Products</li>
                </div>
                <div>
                    <Report />
                    <li>Reports</li>
                </div>
                <br />
                <div>
                    <Payment />
                    <li>Developers</li>
                </div>
                <div>
                    <Toggle />
                    <span className="fix_side_push">View test data</span>
                </div>
                <div>
                    <Settings />
                    <li>Settings</li>
                </div>
            </ul>
        </aside>
    )
}

export default SideMenu
