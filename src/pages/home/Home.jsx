import Chart from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLg from '../../components/widgetLg/WidgetLg';
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        grid
        dataKey="uv"
      />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
}
