-- 1. Display all the data of customers
SELECT *
FROM CUSTOMER;

-- 2. Display the product_name and category for products which their price is between 5000 and 10000
SELECT PRODUCT_NAME, CATEGORY
FROM PRODUCT
WHERE PRICE BETWEEN 5000 AND 10000;

-- 3. Display all the data of products sorted in descending order of price
SELECT *
FROM PRODUCT
ORDER BY PRICE DESC;

-- 4. Display the total number of orders, the average amount,
--    the highest total amount and the lower total amount
SELECT
    COUNT(*) AS TOTAL_ORDERS,
    AVG(TOTAL_AMOUNT) AS AVERAGE_AMOUNT,
    MAX(TOTAL_AMOUNT) AS HIGHEST_TOTAL_AMOUNT,
    MIN(TOTAL_AMOUNT) AS LOWEST_TOTAL_AMOUNT
FROM ORDERS;

-- 5. For each product_id, display the number of orders
SELECT
    PRODUCT_ID,
    COUNT(*) AS NUMBER_OF_ORDERS
FROM ORDERS
GROUP BY PRODUCT_ID;

-- 6. Display the customer_id which has more than 2 orders
SELECT CUSTOMER_ID
FROM ORDERS
GROUP BY CUSTOMER_ID
HAVING COUNT(*) > 2;

-- 7. For each month of the 2020 year, display the number of orders
WITH MONTHS_2020 AS (
    SELECT ADD_MONTHS(DATE '2020-01-01', LEVEL - 1) AS MONTH_START
    FROM DUAL
    CONNECT BY LEVEL <= 12
)
SELECT
    TO_CHAR(M.MONTH_START, 'MM') AS MONTH_NUMBER,
    TO_CHAR(M.MONTH_START, 'MONTH') AS MONTH_NAME,
    COUNT(O.ORDERDATE) AS NUMBER_OF_ORDERS
FROM MONTHS_2020 M
LEFT JOIN ORDERS O
    ON O.ORDERDATE >= M.MONTH_START
    AND O.ORDERDATE < ADD_MONTHS(M.MONTH_START, 1)
GROUP BY M.MONTH_START
ORDER BY M.MONTH_START;

-- 8. For each order, display the product_name, the customer_name and the date of the order
SELECT
    P.PRODUCT_NAME,
    C.CUSTOMER_NAME,
    O.ORDERDATE
FROM ORDERS O
JOIN PRODUCT P
    ON O.PRODUCT_ID = P.PRODUCT_ID
JOIN CUSTOMER C
    ON O.CUSTOMER_ID = C.CUSTOMER_ID;

-- 9. Display all the orders made three months ago
SELECT *
FROM ORDERS
WHERE ORDERDATE >= ADD_MONTHS(TRUNC(SYSDATE, 'MM'), -3)
    AND ORDERDATE < ADD_MONTHS(TRUNC(SYSDATE, 'MM'), -2);

-- 10. Display customers (customer_id) who have never ordered a product
SELECT C.CUSTOMER_ID
FROM CUSTOMER C
LEFT JOIN ORDERS O
    ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE O.CUSTOMER_ID IS NULL;
