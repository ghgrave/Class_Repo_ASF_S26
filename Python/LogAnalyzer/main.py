import csv

def main():
    # "with" allows us to open AND close the file
    with open('./Data/security_logs.csv', newline='') as csvFile:
        # constructor that gives more methods and access to our csvFile
        # also makes our file now iterable
        reader = csv.DictReader(csvFile)

        # This automatically captures the first row as a list of strings
        # fieldnames creates a list of headers from the first line
        headers = reader.fieldnames
        print(f"Detected Headers: {headers}")

        # # Now you can iterate through the data rows
        # for row in reader:
        #     # Since you don't know the names, you can loop through the headers you just found
        #     for column in headers:
        #         print(f"{column}: {row[column]}")
        #     print("-" * 10)


# Runs only when you execute the file directly
if __name__ == "__main__":
    main()
