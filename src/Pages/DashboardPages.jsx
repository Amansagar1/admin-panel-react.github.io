import React from "react";
import ReactApexChart from 'react-apexcharts';

class DashboardPages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [52, 30, 18],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Used Storage(18.240GB)', 'System Storage(6.500GB)', 'Available Storage(9.150GB)'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'right'
            }
          }
        }]
      },
      notifications: [],
      orders: []
    };
  }

  componentDidMount() {
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ notifications: data.notifications || [], orders: data.orders || [] });
      })
      .catch(error => {
        console.log("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json", error);
      });
  }

  render() {
    const { notifications, orders } = this.state;

    return (
      <div className="h-[100%] w-full bg-[#4E657A] ">
        <h1 className="text-white p-10 pl-40">
          Welcome back, <span className="font-bold">Admin</span>
        </h1>

        <div className="flex text-white">
          <div className="bg-[#435C70] w-[550px] h-[400px] ml-40 ">
            <h1 className="text-white p-10">Latest Hits</h1>
          </div>

          <div className="bg-[#435C70] w-[550px] h-[400px] ml-20 ">
            <h1 className="text-white p-10">Performance</h1>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="bg-[#435C70] w-[550px] h-[400px] ml-40 ">
            <h1 className="text-white p-10">Storage Information</h1>
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={480} style={{ marginLeft: '80px' }} />
          </div>

          <div className="bg-[#435C70] w-[550px] h-[400px] ml-20 ">
            <h1 className="text-white p-10">Notification List</h1>
            {notifications && notifications.length > 0 ? (
              <ul>
                {notifications.map(notification => (
                  <li key={notification.id}>{notification.message}</li>
                ))}
              </ul>
            ) : (
              <p className="text-white">No notifications available.</p>
            )}
          </div>
        </div>

        <div className="flex pt-10 pb-10">
          <div className="bg-[#435C70] w-[78%] h-[400px] ml-40 ">
            <h1 className="text-white p-10">Order List</h1>
            {orders && orders.length > 0 ? (
              <ul>
                {orders.map(order => (
                  <li key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>Product: {order.product}</p>
                    <p>Price: {order.price}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">No orders available.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPages;
