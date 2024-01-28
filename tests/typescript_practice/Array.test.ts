import { Movie } from "@/models/Movie";
import { PaginatedResponse } from "@/models/PaginatedResponse";

describe('Array practice', () => {
    let movies: PaginatedResponse<Movie>

    beforeAll(async () => {
        movies = {
            "data": [
              {
                "id": 1,
                "name": "The Matrix",
                "release_date": 1999,
                "genre_ids": [
                  1,
                  4
                ]
              },
              {
                "id": 2,
                "name": "Titanic",
                "release_date": 1997,
                "genre_ids": [
                  5,
                  6
                ]
              },
              {
                "id": 3,
                "name": "The Avengers",
                "release_date": 2012,
                "genre_ids": [
                  7
                ]
              },
              {
                "id": 4,
                "name": "Serenity",
                "release_date": 2005,
                "genre_ids": [
                  8
                ]
              },
              {
                "id": 5,
                "name": "The Mummy",
                "release_date": 1999,
                "genre_ids": [
                  9,
                  10,
                  1,
                  2
                ]
              }
            ],
            "page_number": 1,
            "page_limit": 10,
            "total_results": 5
          }
    });

    test('Array method - Find', async () => {
        // Arrange
        const expectedMovie: Movie = movies.data[0];

        // Act
        const foundMovie: Movie | undefined = movies.data.find((movie) => movie.name.startsWith('The'));

        // Assert
        expect(foundMovie).toBe(expectedMovie);
    });

    test('Array method - FindIndex', async () => {
        // Arrange

        // Act
        const foundMovie: number = movies.data.findIndex((movie) => movie.name.startsWith('The'));

        // Assert
        expect(foundMovie).toBe(0);
    });

    test('Array method - Filter and includes', async () => {
        // Arrange
        const expectedMovies: Movie[] = [
            movies.data[0],
            movies.data[4]
        ];
        
        // Act
        const foundMovies: Movie[] = movies.data.filter((movie) => movie.genre_ids.includes(1));

        // Assert
        expect(foundMovies).toEqual(expectedMovies);
    });

    test('Array method - Map', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const movieNamesInUpper: string[] = copiedMovies.map((movie) => movie.name.toUpperCase());

        // Assert
        expect(movieNamesInUpper).toEqual([
            'THE MATRIX',
            'TITANIC',
            'THE AVENGERS',
            'SERENITY',
            'THE MUMMY'
        ]);
    });

    test('Array method - Reduce', async () => {
        // Arrange

        // Act
        const totalReleaseDate: number = movies.data.reduce((total, movie) => total + movie.release_date, 0);

        // Assert
        expect(totalReleaseDate).toBe(10012);
    });
    
    test('Array method - Some', async () => {
        // Arrange
        
        // Act
        const hasMovie: boolean = movies.data.some(movie => movie.name.startsWith('The'));

        // Assert
        expect(hasMovie).toBe(true);
    });

    test('Array method - Every', async () => {
        // Arrange

        // Act
        const hasMovie: boolean = movies.data.every(movie => movie.name.toLowerCase().includes('t'));

        // Assert
        expect(hasMovie).toBe(true);
    });

    test('Array method - Sort descending', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const sortedMovies: Movie[] = copiedMovies.sort((a, b) => b.release_date - a.release_date);

        // Assert
        expect(sortedMovies).toEqual([
            movies.data[2],
            movies.data[3],
            movies.data[0],
            movies.data[4],
            movies.data[1]
        ]);
    });    

    test('Array method - Reverse', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const reversedMovies: Movie[] = copiedMovies.reverse();

        // Assert
        expect(reversedMovies).toEqual([
            movies.data[4],
            movies.data[3],
            movies.data[2],
            movies.data[1],
            movies.data[0]
        ]);
    });

    test('Array method - Slice', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const slicedMovies: Movie[] = copiedMovies.slice(1, 3);

        // Assert
        expect(slicedMovies).toEqual([
            movies.data[1],
            movies.data[2]
        ]);
    });
    
    test('Array method - Splice', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const splicedMovies: Movie[] = copiedMovies.splice(1, 3);

        // Assert
        expect(splicedMovies).toEqual([
            movies.data[1],
            movies.data[2],
            movies.data[3]
        ]);
    });
    
    test('Array method - Concat', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const concatedMovies: Movie[] = copiedMovies.concat(movies.data);

        // Assert
        expect(concatedMovies).toEqual([
            movies.data[0],
            movies.data[1],
            movies.data[2],
            movies.data[3],
            movies.data[4],
            movies.data[0],
            movies.data[1],
            movies.data[2],
            movies.data[3],
            movies.data[4]
        ]);
    });

    test('Array method - indexOf', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const indexOfMovie: number = copiedMovies.indexOf(movies.data[2]);

        // Assert
        expect(indexOfMovie).toBe(2);
    });
    
    test('Array method - lastIndexOf', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const lastIndexOfMovie: number = copiedMovies.lastIndexOf(movies.data[2]);

        // Assert
        expect(lastIndexOfMovie).toBe(2);
    });

    test('Array method - join', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const joinedMovies: string = copiedMovies.map(movie => movie.name).join(', ');

        // Assert
        expect(joinedMovies).toBe('The Matrix, Titanic, The Avengers, Serenity, The Mummy');
    });
    
    test('Array method - toString', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const joinedMovies: string = copiedMovies.map(movie => movie.name).toString();

        // Assert
        expect(joinedMovies).toBe('The Matrix,Titanic,The Avengers,Serenity,The Mummy');
    });

    test('Array method - includes', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const hasMovie: boolean = copiedMovies.map(movie => movie.name).includes('The Matrix');

        // Assert
        expect(hasMovie).toBe(true);
    });

    test('Array method - flat', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const flatMovies: Movie[] = copiedMovies.flat();

        // Assert
        expect(flatMovies).toEqual([
            movies.data[0],
            movies.data[1],
            movies.data[2],
            movies.data[3],
            movies.data[4]
        ]);
    });

    test('Array method - flatMap', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const flatMovies: number[] = copiedMovies.flatMap(movie => movie.genre_ids);

        // Assert
        expect(flatMovies).toEqual([
            1,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            1,
            2
        ]);
    });

    test('Array method - copyWithin', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const copiedWithinMovies: Movie[] = copiedMovies.copyWithin(1, 2);

        // Assert
        expect(copiedWithinMovies).toEqual([
            movies.data[0],
            movies.data[2],
            movies.data[3],
            movies.data[4],
            movies.data[4]
        ]);
    });

    test('Array method - fill', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const filledMovies: Movie[] = copiedMovies.fill(movies.data[0], 1, 3);

        // Assert
        expect(filledMovies).toEqual([
            movies.data[0],
            movies.data[0],
            movies.data[0],
            movies.data[3],
            movies.data[4]
        ]);
    });

    test('Array method - pop', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const poppedMovie: Movie | undefined = copiedMovies.pop();

        // Assert
        expect(poppedMovie).toBe(movies.data[4]);
    });

    test('Array method - push', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const pushedMovie: number = copiedMovies.push(movies.data[0]);

        // Assert
        expect(pushedMovie).toBe(6);
    });

    test('Array method - shift', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const shiftedMovie: Movie | undefined = copiedMovies.shift();

        // Assert
        expect(shiftedMovie).toBe(movies.data[0]);
        expect(copiedMovies.length).toBe(4);
    });

    test('Array method - unshift', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const unshiftedMovie: number = copiedMovies.unshift(movies.data[0]);

        // Assert
        expect(unshiftedMovie).toBe(6);
        expect(copiedMovies.length).toBe(6);
    });
    
    test('Array method - entries', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const entries: IterableIterator<[number, Movie]> = copiedMovies.entries();
        const firstEntry: IteratorResult<[number, Movie]> = entries.next();

        // Assert
        expect(firstEntry.value).toEqual([0, movies.data[0]]);
    });

    test('Array method - keys', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const keys: IterableIterator<number> = copiedMovies.keys();
        const firstKey: IteratorResult<number> = keys.next();

        // Assert
        expect(firstKey.value).toBe(0);
    });

    test('Array method - values', async () => {
        // Arrange
        const copiedMovies: Movie[] = [...movies.data];

        // Act
        const values: IterableIterator<Movie> = copiedMovies.values();
        const firstValue: IteratorResult<Movie> = values.next();

        // Assert
        expect(firstValue.value).toBe(movies.data[0]);
    });
});