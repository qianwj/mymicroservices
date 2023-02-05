package main

import (
	"github.com/go-micro/plugins/v4/server/grpc"
	"go-micro.dev/v4"
	"go-micro.dev/v4/logger"
	"go-micro.dev/v4/server"
	"mydata/handler"
	pb "mydata/proto"
)

var (
	service = "mydata"
	version = "latest"
)

func main() {
	rpcServer := grpc.NewServer(
		server.Address(":9002"),
	)

	// Register handler
	if err := pb.RegisterMydataHandler(rpcServer, &handler.Mydata{}); err != nil {
		logger.Fatal(err)
	}

	// Create service
	srv := micro.NewService(micro.Server(rpcServer))
	srv.Init(
		micro.Name(service),
		micro.Version(version),
	)

	// Run service
	if err := srv.Run(); err != nil {
		logger.Fatal(err)
	}
}
