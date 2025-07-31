import PageOne from './PageOne';
import PageFour from './PageFour';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFive from './PageFive';
import PageSix from './PageSix';
import PageSeven from './PageSeven';

const Home = () => {
  return (
    <div className='mb-8 flex flex-col items-center justify-center'>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
    </div>
  );
};


export default Home;