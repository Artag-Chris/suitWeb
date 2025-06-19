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
})` , "Deconing some secrets...", "Finding some wifi..."]}
                    speed={50}
                    deleteSpeed={80}
                    delay={1500}
                    cursorBlinkSpeed={1}
                    className="text-xl font-bold"
                />
            </div>


        </div>
    );
};