import { Globe, Code, Zap } from "lucide-react";
import Typewriter from "./TypeWriter";

export const ConsoleComponent: React.FC<{ currentCode: string }> = ({ currentCode }) => {
    return (
        <div className="glass-card p-6 rounded-xl border border-primary-accent/30 shadow-xl h-full">
            <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-text-secondary text-sm">console.log()</span>
            </div>

            <div className="text-primary-cyber font-code bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-primary-accent/30 mb-6">
                <Typewriter
                    text={[`const mysql = require('mysql2') const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Root',
  password: 'contrasena',
  database: 'X3Rp3000'
}) connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error);
    return;
  }
  console.log('Conectado a la base de datos.');
})` , `function TasaCambioUSD() {
  const [valorDolar, setValorDolar] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTasa = async () => {
      try {
        const respuesta = await axios.get('https://api.exchangerate.host/latest?base=USD&symbols=COP');
        const tasa = respuesta.data.rates.COP;
        setValorDolar(tasa);
      } catch (err) {
        setError('Error al obtener la tasa de cambio');
      } finally {
        setCargando(false);
      }
    };

    obtenerTasa();
  }, []);

  if (cargando) return <p>Cargando tasa de cambio...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Tasa de Cambio</h2>
      <p>1 USD = {valorDolar} COP</p>
    </div>
  );
}`, `FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
`]}
                    speed={90}
                    deleteSpeed={80}
                    delay={1500}
                    cursorBlinkSpeed={1}
                    className="text-xl font-bold"
                />
            </div>


        </div>
    );
};