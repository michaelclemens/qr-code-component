import qrCodeImg from './assets/image-qr-code.png'
import Card from './components/Card'

function App() {
  return (
    <main className="font-outfit flex h-screen flex-col items-center justify-center bg-slate-300">
      <Card>
        <img src={qrCodeImg} alt="QR code image" className="mb-6 rounded-[10px]" />
        <div className="space-y-4 px-4 text-center">
          <h1 className="text-header text-slate-900">Improve your front-end skills by building projects</h1>
          <p className="text-paragraph text-slate-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </Card>
    </main>
  )
}

export default App
