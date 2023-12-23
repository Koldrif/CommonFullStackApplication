FROM ubuntu:22.04
RUN apt-get update && apt-get install -y dotnet-sdk-7.0
CMD ["dotnet run","--project" ,"./lab_2"]
