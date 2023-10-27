import Button from './components/common/button/Button'
import './styles/index.css'

function App() {
  return (
    <div className={'App'}>
      <p className={'headline-30'}>{'headline-30 font'}</p>
      <p className={'headline-25'}>{'headline-25 font'}</p>
      <p className={'subHead-18'}>{'subHead-18 font'}</p>
      <p className={'subHead-16'}>{'subHead-16 font'}</p>
      <p className={'subHead-13'}>{'subHead-13 font'}</p>
      <p className={'body-18'}>{'body-18 font'}</p>
      <p className={'body-16'}>{'body-16 font'}</p>
      <p className={'body-15'}>{'body-15 font'}</p>
      <p className={'body-14'}>{'body-14 font'}</p>
      <p className={'caption-13'}>{'caption-13 font'}</p>

      <Button label={'+'} buttonType={'Square'} />
      <Button label={'안녕하세요'} buttonType={'Plain-red'} />
      <Button label={'안녕하세요!'} buttonType={'Plain-blue'} />
      <Button label={'안녕하세요'} buttonType={'Floating'} fullWidth={true} />
      <Button label={'안녕하세요'} buttonType={'Round-blue-500'} />
      <Button label={'안녕하세요'} buttonType={'Round-blue-700'} />
      <Button label={'안녕하세요'} buttonType={'Round-blue-700'} />
      <button className={'w-[100%]'}>{'안녕'}</button>
    </div>
  )
}

export default App
