-- SQL TASK 3
SELECT band_name, (IFNULL(split, 2020) - formed) AS lifespan FROM metal_bands WHERE INSTR(style, 'Glam rock');
