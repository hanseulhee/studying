SELECT OUTS.ANIMAL_ID,
OUTS.NAME
FROM ANIMAL_OUTS AS OUTS

WHERE OUTS.ANIMAL_ID NOT IN (
    SELECT ANIMAL_ID
    FROM ANIMAL_INS
)
ORDER BY OUTS.ANIMAL_ID
