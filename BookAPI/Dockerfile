# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# Use the official .NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

# Copy the database file if needed
COPY books.db /app/books.db

# Set environment variable to configure the URL and port
ENV ASPNETCORE_URLS=http://+:80

# Expose the port the application will run on
EXPOSE 80

ENTRYPOINT ["dotnet", "BookAPI.dll"]
