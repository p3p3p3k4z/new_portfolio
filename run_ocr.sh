#!/bin/bash
OUTPUT_FILE="ocr_results.txt"

# Vaciar el archivo si existe
> "$OUTPUT_FILE"

# Buscar recursivamente todas las imágenes .webp en public/certifications
find public/certifications -type f -name "*.webp" | while read -r img; do
    echo "Procesando: $img"
    echo "-------------------" >> "$OUTPUT_FILE"
    echo "--- FILE: $img ---" >> "$OUTPUT_FILE"
    
    # Extraer texto usando tesseract
    tesseract "$img" stdout >> "$OUTPUT_FILE" 2>/dev/null
    
    echo "-------------------" >> "$OUTPUT_FILE"
done

echo "OCR completado. Resultados guardados en $OUTPUT_FILE"
