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
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-[#e6f1ed] pb-12">
        <Navbar />
        <StatusCard />

        <div className='flex justify-center items-center mt-6 gap-5'>
          <Graph />
          <BarGraph />
        </div>

        <AppointmentTable />

        <div className='flex justify-center items-center mt-6 gap-5'>
          <PieChart />
          <AvailTable />
        </div>

        <BackToTop/>
      </div>

    </div>
  );
};

export default page;
