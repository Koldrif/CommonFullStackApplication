FROM ubuntu:22.04
RUN apt-get update && apt-get install dotnet-sdk-7.0
CMD ["dotnet run","--project" ,"./Lab_2"]
