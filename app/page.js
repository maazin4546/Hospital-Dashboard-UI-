import AppointmentTable from '@/components/AppointmentTable';
import AvailTable from '@/components/AvailTable';
import BarGraph from '@/components/BarGraph';
import BackToTop from '@/components/GoToTop';
import Graph from '@/components/Graph';
import Navbar from '@/components/Navbar';
import PieChart from '@/components/PieChart';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/StatusCard';

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pb-12 ml-16">
        <Navbar />
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

        <BackToTop/>
      </div>

    </div>
  );
};

export default page;
