import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
db = sqlite3.connect('eatlemou.sqlite')

db.execute('''DROP TABLE IF EXISTS customers''')
db.execute('''DROP TABLE IF EXISTS orders''')
db.execute('''DROP TABLE IF EXISTS orderdetails''')
db.execute('''DROP TABLE IF EXISTS feedback''')
db.execute('''DROP TABLE IF EXISTS booking''')
db.execute('''DROP TABLE IF EXISTS vouchers''')


# Create the customers table
db.execute('''CREATE TABLE customers(
    c_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    dob DATE,
    phoneno TEXT,
    email TEXT UNIQUE,
    points INTEGER DEFAULT 750,
    profile BLOB
)''')

# Create the orders table
db.execute('''CREATE TABLE orders(
    o_id INTEGER PRIMARY KEY AUTOINCREMENT,
    c_id INTEGER,
    total REAL,
    order_status TEXT DEFAULT 'Pending',
    FOREIGN KEY (c_id) REFERENCES customers(c_id)
)''')

# Create the orderdetails table
db.execute('''CREATE TABLE orderdetails(
    od_id INTEGER PRIMARY KEY AUTOINCREMENT,
    o_id INTEGER,
    f_name TEXT,
    quantity INTEGER,
    FOREIGN KEY (o_id) REFERENCES orders(o_id)
)''')

# Create the feedback table
db.execute('''CREATE TABLE feedback(
    feedback_id INTEGER PRIMARY KEY AUTOINCREMENT,
    enquiry TEXT,
    details TEXT
)''')

# Create the booking table
db.execute('''CREATE TABLE booking(
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    c_id INTEGER,
    no_of_guest INTEGER,
    bookdate DATE,
    booktime TIME,
    booktype TEXT,
    booktable INTEGER,
    note TEXT DEFAULT 'None',
    FOREIGN KEY (c_id) REFERENCES customers(c_id)
)''')

# Create the vouchers table
db.execute('''CREATE TABLE vouchers(
    voucher_id INTEGER PRIMARY KEY AUTOINCREMENT,
    promo_code TEXT UNIQUE,
    value REAL,
    expiration_date DATE,
    is_used INTEGER DEFAULT 0,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(c_id)
)''')

cursor = db.cursor()

db.commit()
db.close()
