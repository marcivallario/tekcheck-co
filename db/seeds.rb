# reset database: rails db:reset db:seed

puts "Seeding..."

user1 = User.create!(email: 'marcivallario@gmail.com', first_name: 'Marci', last_name: 'Vallario', password: 'Marci123')

puts "Seeding complete!"
