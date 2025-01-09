import AppointmentTable from '@/components/AppointmentTable';
import AvailTable from '@/components/AvailTable';
import BarGraph from '@/components/BarGraph';
import BackToTop from '@/components/GoToTop';
import Graph from '@/components/Graph';
import Navbar from '@/components/Navbar';
import PieChart from '@/components/PieChart';
import StatusCard from '@/components/StatusCard';

const page = () => {
  return (
    <div>
      <Navbar title={"Quick Start"} path={" / Dashboard"}/>
      <StatusCard />
      <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-5 p-6 md:p-0'>
        <Graph />
        <BarGraph />
      </div>

      <AppointmentTable />

      <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-5 p-6 md:p-0'>
        <PieChart />
        <AvailTable />
      </div>

      <BackToTop />
    </div>
  );
};

export default page;
