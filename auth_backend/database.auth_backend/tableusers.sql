INSERT INTO users (full_name, email, password, created_at)
VALUES
    ('Adit', 'adit@gmail.com', 'Adit123', DEFAULT),
    ('han vir', 'hanvir@gmail.com', 'HanVir123', DEFAULT),
    ('fairuz', 'fairuz@gmail.com', 'fairuz123', DEFAULT);



UPDATE users
SET full_name = 'Han Vir Updated',
    email = 'hanvir_updated@gmail.com',
    password = 'NewHanVir123',
    created_at = CURRENT_TIMESTAMP
WHERE id = 2;


SELECT * FROM users WHERE id = 2;


DELETE FROM users
WHERE id = 3;

SELECT * FROM users;