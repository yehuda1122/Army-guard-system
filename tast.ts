import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'db.btfagniahpeisolkumlp.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'הסיסמה_שלך',
  database: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ חיבור לדאטה עובד!');
  } catch (error) {
    console.error('❌ חיבור נכשל:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
