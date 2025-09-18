require('dotenv').config();
const { Client } = require('pg');

async function seedData() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('🌱 Starting data seeding...');
    await client.connect();

    // First, let's add some properties
    console.log('🏠 Adding sample properties...');

    const properties = [
      {
        id: 'prop-1',
        name: 'Propiedad Centro',
        address: '18 de Julio 1234, Montevideo',
        propertyType: 'APARTAMENTO',
        totalRooms: 12,
        managerId: 'admin-1'
      },
      {
        id: 'prop-2',
        name: 'Propiedad Pocitos',
        address: 'Bvar. España 567, Pocitos',
        propertyType: 'CASA',
        totalRooms: 8,
        managerId: 'admin-1'
      },
      {
        id: 'prop-3',
        name: 'Propiedad Cordón',
        address: 'Canelones 890, Cordón',
        propertyType: 'APARTAMENTO',
        totalRooms: 15,
        managerId: 'admin-1'
      }
    ];

    for (const property of properties) {
      await client.query(`
        INSERT INTO "Property" (id, name, address, "propertyType", "totalRooms", "managerId")
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO NOTHING
      `, [property.id, property.name, property.address, property.propertyType, property.totalRooms, property.managerId]);
    }

    // Add some tenant users
    console.log('👥 Adding sample tenants...');

    const tenants = [
      {
        id: 'tenant-1',
        email: 'juan.perez@email.com',
        name: 'Juan',
        lastName: 'Pérez',
        cedula: '12345678',
        phone: '099123456',
        password: '$2a$12$dummy.hash.for.testing',
        role: 'TENANT',
        pointsBalance: 450
      },
      {
        id: 'tenant-2',
        email: 'maria.gonzalez@email.com',
        name: 'María',
        lastName: 'González',
        cedula: '87654321',
        phone: '098765432',
        password: '$2a$12$dummy.hash.for.testing',
        role: 'TENANT',
        pointsBalance: 320
      },
      {
        id: 'tenant-3',
        email: 'carlos.rodriguez@email.com',
        name: 'Carlos',
        lastName: 'Rodríguez',
        cedula: '11223344',
        phone: '091234567',
        password: '$2a$12$dummy.hash.for.testing',
        role: 'TENANT',
        pointsBalance: 180
      }
    ];

    for (const tenant of tenants) {
      await client.query(`
        INSERT INTO "User" (id, email, name, "lastName", cedula, phone, password, role, "pointsBalance")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (email) DO NOTHING
      `, [tenant.id, tenant.email, tenant.name, tenant.lastName, tenant.cedula, tenant.phone, tenant.password, tenant.role, tenant.pointsBalance]);
    }

    // Check what we created
    const propertyCount = await client.query('SELECT COUNT(*) FROM "Property"');
    const userCount = await client.query('SELECT COUNT(*) FROM "User"');

    console.log(`✅ Seeding completed!`);
    console.log(`📊 Properties: ${propertyCount.rows[0].count}`);
    console.log(`👤 Users: ${userCount.rows[0].count}`);

  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    await client.end();
  }
}

seedData().catch(console.error);