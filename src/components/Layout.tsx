import { Link } from "react-router-dom";


interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="wrapper">
			<header className="hamburger-menu">
				<h1>FUCK LIST</h1>
				<input type="checkbox" name="hamburger" id="hamburger" className="hamburger-menu-input" />
				<label htmlFor="hamburger" className="hamburger-menu-bg"></label>
				<ul className="header-list hamburger-menu-list">
					<li className="header-list-item">
						<span>
							<i className="fas fa-link"></i>
						</span>
					</li>
					<li className="header-list-item">
						<Link to="/">
							<img src="../public/img/icon/entry.svg" alt="" />
							<i className="fas fa-entry">記帳</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/all/regist">
							<img src="../public/img/icon/type.svg" alt="" />
							<i className="fas fa-month">新規登録</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/all/list">
							<img src="../public/img/icon/type2.svg" alt="" />
							<i className="fas fa-type">一覧</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/bluray/regist">
							<img src="../public/img/icon/type.svg" alt="" />
							<i className="fas fa-month">新規登録</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/bluray/list">
							<img src="../public/img/icon/type2.svg" alt="" />
							<i className="fas fa-type">一覧</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/dvd/regist">
							<img src="../public/img/icon/type.svg" alt="" />
							<i className="fas fa-month">新規登録</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/dvd/list">
							<img src="../public/img/icon/type2.svg" alt="" />
							<i className="fas fa-type">一覧</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/vhs/regist">
							<img src="../public/img/icon/type.svg" alt="" />
							<i className="fas fa-month">新規登録</i>
						</Link>
					</li>
					<li className="header-list-item">
						<Link to="/vhs/list">
							<img src="../public/img/icon/type2.svg" alt="" />
							<i className="fas fa-type">一覧</i>
						</Link>
					</li>
				</ul>
				<label htmlFor="hamburger" className="hamburger-menu-button">
					<span className="hamburger-menu-button-mark"></span>
					<span className="hamburger-menu-button-mark"></span>
					<span className="hamburger-menu-button-mark"></span>
				</label>
			</header>
			<main>
				{children}
			</main>
		</div>
	);
}

export default Layout;
