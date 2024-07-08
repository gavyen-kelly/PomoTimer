import Timer from '../components/Timer'
import { useEffect, useState } from 'react';
import { StartButton, PauseButton, RestartButton, SkipBreakButton } from '../components/Buttons'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheck } from 'react-icons/fa';
import 'tachyons';

function App() {
  const workTime = 11;
  const breakTime = 11;
  const desiredRepitions = 6;
  const [time, setTime] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusing, setIsFocusing] = useState(true);
  const [sessionsComplete, setSessionsComplete] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsRunning(false);
      if (isFocusing) {
        setTime(breakTime);
        setSessionsComplete((prevCount) => prevCount + 1);
      } else {
        setTime(workTime);
      }
      setIsFocusing(!isFocusing);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, isFocusing]);

  function handleStart() {
    setIsRunning(true)
  }
  function handlePause() {
    setIsRunning(false)
  }
  function handleRestart() {

    setIsRunning(false)
    setTime(workTime)
  }
  function handleSkipBreak() {
    setIsRunning(false)
    setIsFocusing(true)
    setTime(workTime)
  }

  const progress = (sessionsComplete / desiredRepitions) * 100;

  return (
    <div className='tc'>
      <Timer time={time} />
      <div>
        <StartButton onClick={handleStart} />
        <PauseButton onClick={handlePause} />
        {isFocusing ? <RestartButton onClick={handleRestart} /> : <SkipBreakButton onClick={handleSkipBreak} />}
      </div>
      <div>
        <h5>Sessions complete: {sessionsComplete}</h5>
      </div>
      <div className="flex justify-center items-center" style={{ height: '50vh' }}>
        <div style={{ width: 200, height: 200, position: 'relative' }}>
          <CircularProgressbarWithChildren
            value={progress}
            background={progress === 100 ? true : false}
            styles={buildStyles({
              textSize: '16px',
              pathColor: progress === 100 ? '#4caf50' : `rgba(62, 152, 199, ${progress / 100})`,
              textColor: '#3e98c7',
              trailColor: '#d6d6d6',
              backgroundColor: '#4caf50'
            })}
          >
            {progress === 100 ? (
              <FaCheck size={48} color="#FFD700" />
            ) : (
              <div style={{ fontSize: 24 }}>
                <strong>{sessionsComplete}</strong>/{desiredRepitions}
              </div>
            )}
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}

export default App;
