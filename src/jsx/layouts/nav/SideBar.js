/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import LogoutPage from './Logout';
/// Image
import profile from "../../../images/profile/pic1.jpg";
import { connect } from "react-redux";
import routes from "../../../routes";

class MM extends Component {
	componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = (props) => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    // btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	var handleheartBlast = document.querySelector('.heart');
        function heartBlast() {
            return handleheartBlast.classList.toggle("heart-blast");
        }
        handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      "dashboard-dark",
       "search-jobs",
       "applications",
       "my-profile",
       "statistics",
       "companies",
       "task",
    ],
	job = [
		"job-list",
		"job-view",
		"job-application",
		"apply-job",
		"new-job",
		"user-profile",
	],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
	redux = [
       "redux-form",
	   "redux-wizard",    
       "todo",
    ],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];

    const { auth: { auth: { user } }} = props;


  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
      style={{top: '0rem', height: '100vh'}}
    >
      <PerfectScrollbar className="dlabnav-scroll">
			<Dropdown as="div" className=" header-profile2 dropdown">
				<Dropdown.Toggle
				  variant=""
				  as="a"
				  className="nav-link i-false c-pointer"
				  // href="#"
				  role="button"
				  data-toggle="dropdown"
				>
					<div className="header-info2 d-flex align-items-center">
						<img src={user.profilePicture} width={20} alt="" />
						<div className="d-flex align-items-center sidebar-info">
							<div>
								<span className="font-w400 d-block">{user.fullName}</span>
								<small className="text-end font-w400">Superadmin</small>
							</div>	
							<i className="fas fa-chevron-down"></i>
						</div>
					</div>
				</Dropdown.Toggle>

				<Dropdown.Menu align="right" className=" dropdown-menu dropdown-menu-end">
				  <Link to="#" className="dropdown-item ai-icon">
					<svg
					  id="icon-user1"
					  xmlns="http://www.w3.org/2000/svg"
					  className="text-primary"
					  width={18}
					  height={18}
					  viewBox="0 0 24 24"
					  fill="none"
					  stroke="currentColor"
					  strokeWidth={2}
					  strokeLinecap="round"
					  strokeLinejoin="round"
					>
					  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					  <circle cx={12} cy={7} r={4} />
					</svg>
					<span className="ms-2">Profile </span>
				  </Link>
				  <Link to="#" className="dropdown-item ai-icon">
					<svg
					  id="icon-inbox"
					  xmlns="http://www.w3.org/2000/svg"
					  className="text-success"
					  width={18}
					  height={18}
					  viewBox="0 0 24 24"
					  fill="none"
					  stroke="currentColor"
					  strokeWidth={2}
					  strokeLinecap="round"
					  strokeLinejoin="round"
					>
					  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					  <polyline points="22,6 12,13 2,6" />
					</svg>
					<span className="ms-2">Inbox </span>
				  </Link>
				  <LogoutPage />
				</Dropdown.Menu>
			  </Dropdown>
        <MM className="metismenu" id="menu">
		  <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
            <ul >
              <li><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to={`${routes.superAdmin}?users`}>Users</Link></li>
              <li><Link className={`${path === "dashboard-dark" ? "mm-active" : ""}`} to={`${routes.superAdmin}?companies`}> Companies</Link></li>
              <li><Link className={`${path === "search-jobs" ? "mm-active" : ""}`} to={`${routes.superAdmin}?jobs`}> Jobs</Link></li>
              <li><Link className={`${path === "applications" ? "mm-active" : ""}`} to={`${routes.superAdmin}?applications`}> Applications</Link></li>
              <li><Link className={`${path === "statistics" ? "mm-active" : ""}`} to={`${routes.superAdmin}?stats`}>Statistics</Link></li>
              {/* <li><Link className={`${path === "my-profile" ? "mm-active" : ""}`} to="/my-profile"> My Profile</Link></li>
              <li><Link className={`${path === "companies" ? "mm-active" : ""}`} to="/companies">Companies</Link></li>
              <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
            </ul>
          </li>
			{/* <li className={`${job.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow" to="#" >
				  <i className="flaticon-093-waving"></i>
				  <span className="nav-text">Jobs</span>
				</Link>
				<ul >
					<li><Link className={`${path === "job-list" ? "mm-active" : ""}`} to="/job-list">Job Lists</Link></li>
					<li><Link className={`${path === "job-view" ? "mm-active" : ""}`} to="/job-view">Job View</Link></li>
					<li><Link className={`${path === "job-application" ? "mm-active" : ""}`} to="/job-application">Job Application</Link></li>
					<li><Link className={`${path === "apply-job" ? "mm-active" : ""}`} to="/apply-job">Apply Job</Link></li>
					<li><Link className={`${path === "new-job" ? "mm-active" : ""}`} to="/new-job">New Job</Link></li>
					<li><Link className={`${path === "user-profile" ? "mm-active" : ""}`} to="/user-profile">User Profile</Link></li>
				</ul> 
			</li>	
		  
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-050-info"></i>
              <span className="nav-text">Apps</span>
            </Link>
            <ul >
              <li><Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/app-profile">Profile</Link></li>
              <li><Link className={`${path === "post-details" ? "mm-active" : ""}`} to="/post-details">Post Details</Link></li>
              <li className={`${email.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Email</Link>
                <ul  className={`${email.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${ path === "email-compose" ? "mm-active" : ""}`} to="/email-compose">Compose</Link></li>
                  <li><Link className={`${path === "email-inbox" ? "mm-active" : ""}`} to="/email-inbox">Inbox</Link></li>
                  <li><Link className={`${path === "email-read" ? "mm-active" : ""}`} to="/email-read">Read</Link></li>
                </ul>
              </li>
              <li><Link className={`${path === "app-calender" ? "mm-active" : ""}`}to="/app-calender">Calendar</Link></li>
              <li className={`${shop.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Shop</Link>
                <ul  className={`${shop.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${ path === "ecom-product-grid" ? "mm-active" : ""}`} to="/ecom-product-grid">Product Grid</Link></li>
                  <li><Link className={`${ path === "ecom-product-list" ? "mm-active" : ""}`} to="/ecom-product-list">Product List</Link></li>
                  <li><Link className={`${ path === "ecom-product-detail" ? "mm-active" : "" }`} to="/ecom-product-detail">Product Details</Link></li>
                  <li><Link className={`${ path === "ecom-product-order" ? "mm-active" : "" }`} to="/ecom-product-order">Order</Link></li>
                  <li><Link className={`${ path === "ecom-checkout" ? "mm-active" : ""}`} to="/ecom-checkout">Checkout</Link></li>
                  <li><Link className={`${ path === "ecom-invoice" ? "mm-active" : "" }`} to="/ecom-invoice">Invoice</Link></li>
                  <li><Link className={`${ path === "ecom-customers" ? "mm-active" : "" }`} to="/ecom-customers">Customers</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-041-graph"></i>
              <span className="nav-text">Charts</span>
            </Link>
            <ul >
              <li><Link className={`${path === "chart-rechart" ? "mm-active" : ""}`} to="/chart-rechart">RechartJs</Link></li>
              <li>
                <Link
                  className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                  to="/chart-chartjs"
                >
                  Chartjs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartist" ? "mm-active" : ""}`}
                  to="/chart-chartist"
                >
                  Chartist
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-sparkline" ? "mm-active" : ""}`}
                  to="/chart-sparkline"
                >
                  Sparkline
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-apexchart" ? "mm-active" : ""}`}
                  to="/chart-apexchart"
                >
                  Apexchart
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-086-star"></i>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                  to="/ui-accordion"
                >
                  Accordion
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-alert" ? "mm-active" : ""}`}
                  to="/ui-alert"
                >
                  Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-badge" ? "mm-active" : ""}`}
                  to="/ui-badge"
                >
                  Badge
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button" ? "mm-active" : ""}`}
                  to="/ui-button"
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-modal" ? "mm-active" : ""}`}
                  to="/ui-modal"
                >
                  Modal
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button-group" ? "mm-active" : ""}`}
                  to="/ui-button-group"
                >
                  Button Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                  to="/ui-list-group"
                >
                  List Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-card" ? "mm-active" : ""}`}
                  to="/ui-card"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                  to="/ui-carousel"
                >
                  Carousel
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                  to="/ui-dropdown"
                >
                  Dropdown
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-popover" ? "mm-active" : ""}`}
                  to="/ui-popover"
                >
                  Popover
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-progressbar" ? "mm-active" : ""}`}
                  to="/ui-progressbar"
                >
                  Progressbar
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-tab" ? "mm-active" : ""}`}
                  to="/ui-tab"
                >
                  Tab
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-typography" ? "mm-active" : ""}`}
                  to="/ui-typography"
                >
                  Typography
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                  to="/ui-pagination"
                >
                  Pagination
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-grid" ? "mm-active" : ""}`}
                  to="/ui-grid"
                >
                  Grid
                </Link>
              </li>
            </ul>
          </li>
			<li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="flaticon-045-heart"></i><span className="nav-text">Plugins</span>
				</Link>
				<ul >
				  <li><Link className={`${path === "uc-select2" ? "mm-active" : ""}`} to="/uc-select2">Select 2</Link></li>
				  <li><Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} to="/uc-nestable">Nestedable</Link></li>
				  <li><Link className={`${path === "uc-noui-slider" ? "mm-active" : ""}`} to="/uc-noui-slider">Noui Slider</Link></li>
				  <li><Link className={`${path === "uc-sweetalert" ? "mm-active" : ""}`} to="/uc-sweetalert">Sweet Alert</Link></li>
				  <li><Link className={`${path === "uc-toastr" ? "mm-active" : ""}`} to="/uc-toastr">Toastr</Link></li>
				  <li><Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} to="/map-jqvmap">Jqv Map</Link></li>
				  <li><Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} to="/uc-lightgallery">Light Gallery</Link></li>
				</ul>
			</li>
			<li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow ai-icon" to="#" >
                        <i className="flaticon-087-stop"></i><span className="nav-text">Redux</span>
                    </Link>
                <ul>
                  <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/todo">Todo</Link></li>
                  <li><Link className={`${path === "redux-form" ? "mm-active" : ""}`} to="/redux-form">Redux Form</Link></li>
                  <li><Link className={`${path === "redux-wizard" ? "mm-active" : ""}`} to="/redux-wizard">Redux Wizard</Link></li>
                </ul>
            </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="widget-basic" className="ai-icon" >
              <i className="flaticon-013-checkmark"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-072-printer"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-editor-summernote" ? "mm-active" : ""
                  }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-validation-jquery" ? "mm-active" : ""
                  }`}
                  to="/form-validation-jquery"
                >
                  Form Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" ><i className="flaticon-043-menu"></i><span className="nav-text">Table</span></Link>
            <ul>
				<li>
					<Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} to="/table-filtering">
						Table Filtering
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-sorting" ? "mm-active" : "" }`} to="/table-sorting">
						Table Sorting
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-bootstrap-basic" ? "mm-active" : "" }`} to="/table-bootstrap-basic">
						Bootstrap
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-datatable-basic" ? "mm-active" : ""}`} to="/table-datatable-basic">
						Datatable
					</Link>
				</li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-022-copy"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul >
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" >Error</Link>
                <ul>
                  <li><Link className={`${ path === "page-error-400" ? "mm-active" : "" }`} to="/page-error-400">Error 400</Link></li>
                  <li><Link className={`${ path === "page-error-403" ? "mm-active" : "" }`} to="/page-error-403">Error 403</Link></li>
                  <li><Link className={`${ path === "page-error-404" ? "mm-active" : "" }`} to="/page-error-404">Error 404</Link></li>
                  <li><Link className={`${ path === "page-error-500" ? "mm-active" : "" }`} to="/page-error-500">Error 500</Link></li>
                  <li><Link className={`${ path === "page-error-503" ? "mm-active" : "" }`} to="/page-error-503">Error 503</Link></li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${
                    path === "page-lock-screen" ? "mm-active" : ""
                  }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li> */}
        </MM>
		<div className="plus-box">
			<p className="fs-14 font-w600 mb-2">Employer Center Super Admin
      {/* <br/>Your Resume Easily<br/> */}
      </p>
			{/* <p>Lorem ipsum dolor sit amet</p> */}
		</div>
		<div className="copyright">
			<p><strong>Plug2Job Admin</strong> © 2022 All Rights Reserved</p>
			<p className="fs-12"> <span className="heart"></span></p>
		</div>
      </PerfectScrollbar>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(SideBar);
