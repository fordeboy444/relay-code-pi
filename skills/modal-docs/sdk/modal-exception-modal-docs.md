# modal.exception | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.exception
- **Summary:** Modal-specific exception types.

Copy page

modal.exception
===============

Modal-specific exception types.

Notes on `grpclib.GRPCError` migration 

Historically, the Modal SDK could propagate `grpclib.GRPCError` exceptions out to user code. As of v1.3, we are in the process of gracefully migrating to always raising a Modal exception type in these cases. To avoid breaking user code that relies on catching `grpclib.GRPCError`, a subset of Modal exception types temporarily inherit from `grpclib.GRPCError`.

We encourage users to migrate any code that currently catches `grpclib.GRPCError` to instead catch the appropriate Modal exception type. The following mapping between GRPCError status codes and Modal exception types is currently in use:

    CANCELLED -> ServiceError
    UNKNOWN -> ServiceError
    INVALID_ARGUMENT -> InvalidError
    DEADLINE_EXCEEDED -> ServiceError
    NOT_FOUND -> NotFoundError
    ALREADY_EXISTS -> AlreadyExistsError
    PERMISSION_DENIED -> PermissionDeniedError
    RESOURCE_EXHAUSTED -> ResourceExhaustedError
    FAILED_PRECONDITION -> ConflictError
    ABORTED -> ConflictError
    OUT_OF_RANGE -> InvalidError
    UNIMPLEMENTED -> UnimplementedError
    INTERNAL -> InternalError
    UNAVAILABLE -> ServiceError
    DATA_LOSS -> DataLossError
    UNAUTHENTICATED -> AuthError

modal.exception.AlreadyExistsError 

    class AlreadyExistsError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a resource creation conflicts with an existing resource.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.AsyncUsageWarning 

    class AsyncUsageWarning(UserWarning)

Warning emitted when a blocking Modal interface is used in an async context.

modal.exception.AuthError 

    class AuthError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a client has missing or invalid authentication.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.ClientClosed 

    class ClientClosed(modal.exception.Error)

modal.exception.ConflictError 

    class ConflictError(modal.exception.InvalidError, modal.exception._GRPCErrorWrapper)

Raised when a resource conflict occurs between the request and current system state.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.ConnectionError 

    class ConnectionError(modal.exception.Error)

Raised when an issue occurs while connecting to the Modal servers.

modal.exception.DataLossError 

    class DataLossError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when data is lost or corrupted.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.DeprecationError 

    class DeprecationError(UserWarning)

UserWarning category emitted when a deprecated Modal feature or API is used.

modal.exception.DeserializationError 

    class DeserializationError(modal.exception.Error)

Raised to provide more context when an error is encountered during deserialization.

modal.exception.Error 

    class Error(Exception)

Base class for all Modal errors. See [`modal.exception`](https://modal.com/docs/sdk/py/latest/modal.exception)
 for the specialized error classes.

**Usage**

    import modal
    
    try:
        ...
    except modal.Error:
        # Catch any exception raised by Modal's systems.
        print("Responding to error...")

modal.exception.ExecTimeoutError 

    class ExecTimeoutError(modal.exception.TimeoutError)

Raised when a container process exceeds its execution duration limit and times out.

modal.exception.ExecutionError 

    class ExecutionError(modal.exception.Error)

Raised when something unexpected happened during runtime.

modal.exception.FilesystemExecutionError 

    class FilesystemExecutionError(modal.exception.Error)

Raised when an unknown error is thrown during a container filesystem operation.

modal.exception.FunctionTimeoutError 

    class FunctionTimeoutError(modal.exception.TimeoutError)

Raised when a Function exceeds its execution duration limit and times out.

modal.exception.InputCancellation 

    class InputCancellation(BaseException)

Raised when the current input is cancelled by the task

Intentionally a BaseException instead of an Exception, so it won’t get caught by unspecified user exception clauses that might be used for retries and other control flow.

modal.exception.InteractiveTimeoutError 

    class InteractiveTimeoutError(modal.exception.TimeoutError)

Raised when interactive frontends time out while trying to connect to a container.

modal.exception.InternalError 

    class InternalError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when an internal error occurs in the Modal system.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.InternalFailure 

    class InternalFailure(modal.exception.Error)

Retriable internal error.

modal.exception.InvalidError 

    class InvalidError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when user does something invalid.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.LogsFetchError 

    class LogsFetchError(modal.exception.Error)

Raised when trying to fetch too many logs.

modal.exception.ModuleNotMountable 

    class ModuleNotMountable(Exception)

modal.exception.MountUploadTimeoutError 

    class MountUploadTimeoutError(modal.exception.TimeoutError)

Raised when a Mount upload times out.

modal.exception.NotFoundError 

    class NotFoundError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a requested resource was not found.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.OutputExpiredError 

    class OutputExpiredError(modal.exception.TimeoutError)

Raised when the Output exceeds expiration and times out.

modal.exception.PermissionDeniedError 

    class PermissionDeniedError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a user does not have permission to perform the requested operation.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.RemoteError 

    class RemoteError(modal.exception.Error)

Raised when an error occurs on the Modal server.

modal.exception.RequestSizeError 

    class RequestSizeError(modal.exception.Error)

Raised when an operation produces a gRPC request that is rejected by the server for being too large.

modal.exception.ResourceExhaustedError 

    class ResourceExhaustedError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a server-side resource has been exhausted, e.g. a quota or rate limit.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.SandboxFilesystemDirectoryNotEmptyError 

    class SandboxFilesystemDirectoryNotEmptyError(modal.exception.SandboxFilesystemError)

Raised when a directory is not empty.

modal.exception.SandboxFilesystemError 

    class SandboxFilesystemError(modal.exception.Error)

Base class for sandbox filesystem errors.

modal.exception.SandboxFilesystemFileTooLargeError 

    class SandboxFilesystemFileTooLargeError(modal.exception.SandboxFilesystemError)

Raised when a file exceeds the maximum allowed size for a read operation in the sandbox.

modal.exception.SandboxFilesystemIsADirectoryError 

    class SandboxFilesystemIsADirectoryError(modal.exception.SandboxFilesystemError)

Raised when a file operation in the sandbox targets a directory when it should target a non-directory file.

modal.exception.SandboxFilesystemNotADirectoryError 

    class SandboxFilesystemNotADirectoryError(modal.exception.SandboxFilesystemError)

Raised when a path component in the sandbox is not a directory.

modal.exception.SandboxFilesystemNotFoundError 

    class SandboxFilesystemNotFoundError(modal.exception.SandboxFilesystemError)

Raised when a file or directory is not found in the sandbox.

modal.exception.SandboxFilesystemPathAlreadyExistsError 

    class SandboxFilesystemPathAlreadyExistsError(modal.exception.SandboxFilesystemError)

Raised when a path already exists and the operation requires it to be absent.

modal.exception.SandboxFilesystemPermissionError 

    class SandboxFilesystemPermissionError(modal.exception.SandboxFilesystemError)

Raised when permission is denied for a file operation in the sandbox.

modal.exception.SandboxTerminatedError 

    class SandboxTerminatedError(modal.exception.Error)

Raised when a Sandbox is terminated for an internal reason.

modal.exception.SandboxTimeoutError 

    class SandboxTimeoutError(modal.exception.TimeoutError)

Raised when a Sandbox exceeds its execution duration limit and times out.

modal.exception.SerializationError 

    class SerializationError(modal.exception.Error)

Raised to provide more context when an error is encountered during serialization.

modal.exception.ServerWarning 

    class ServerWarning(UserWarning)

Warning originating from the Modal server and re-issued in client code.

modal.exception.ServiceError 

    class ServiceError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when an error occurs in basic client/server communication.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.TimeoutError 

    class TimeoutError(modal.exception.Error)

Base class for Modal timeouts.

modal.exception.UnimplementedError 

    class UnimplementedError(modal.exception.Error, modal.exception._GRPCErrorWrapper)

Raised when a requested operation is not implemented or not supported.

    __init__(self, message=None)

### message 

    message(self)

### status 

    status(self)

### details 

    details(self)

modal.exception.VersionError 

    class VersionError(modal.exception.Error)

Raised when the current client version of Modal is unsupported.

modal.exception.VolumeUploadTimeoutError 

    class VolumeUploadTimeoutError(modal.exception.TimeoutError)

Raised when a Volume upload times out.

modal.exception.WorkspaceManagementError 

    class WorkspaceManagementError(modal.exception.Error)

Raised when an error occurs while managing a workspace.

modal.exception.simulate_preemption 

    simulate_preemption(wait_seconds, jitter_seconds=0)

Utility for simulating a preemption interrupt after `wait_seconds` seconds. The first interrupt is the SIGINT signal. After 30 seconds, a second interrupt will trigger.

This second interrupt simulates SIGKILL, and should not be caught. Optionally add between zero and `jitter_seconds` seconds of additional waiting before first interrupt.

**Usage**

    import time
    from modal.exception import simulate_preemption
    
    simulate_preemption(3)
    
    try:
        time.sleep(4)
    except KeyboardInterrupt:
        print("got preempted") # Handle interrupt
        raise

See [https://modal.com/docs/guide/preemption](https://modal.com/docs/guide/preemption)
 for more details on preemption handling.

[modal.exception](https://modal.com/docs/sdk/py/latest/modal.exception#modalexception)
[Notes on grpclib.GRPCError migration](https://modal.com/docs/sdk/py/latest/modal.exception#notes-on-grpclibgrpcerror-migration)
[AlreadyExistsError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionalreadyexistserror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details)
[AsyncUsageWarning](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionasyncusagewarning)
[AuthError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionautherror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-1)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-1)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-1)
[ClientClosed](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionclientclosed)
[ConflictError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionconflicterror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-2)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-2)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-2)
[ConnectionError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionconnectionerror)
[DataLossError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptiondatalosserror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-3)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-3)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-3)
[DeprecationError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptiondeprecationerror)
[DeserializationError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptiondeserializationerror)
[Error](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionerror)
[ExecTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionexectimeouterror)
[ExecutionError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionexecutionerror)
[FilesystemExecutionError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionfilesystemexecutionerror)
[FunctionTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionfunctiontimeouterror)
[InputCancellation](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptioninputcancellation)
[InteractiveTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptioninteractivetimeouterror)
[InternalError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptioninternalerror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-4)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-4)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-4)
[InternalFailure](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptioninternalfailure)
[InvalidError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptioninvaliderror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-5)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-5)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-5)
[LogsFetchError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionlogsfetcherror)
[ModuleNotMountable](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionmodulenotmountable)
[MountUploadTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionmountuploadtimeouterror)
[NotFoundError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionnotfounderror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-6)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-6)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-6)
[OutputExpiredError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionoutputexpirederror)
[PermissionDeniedError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionpermissiondeniederror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-7)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-7)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-7)
[RemoteError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionremoteerror)
[RequestSizeError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionrequestsizeerror)
[ResourceExhaustedError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionresourceexhaustederror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-8)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-8)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-8)
[SandboxFilesystemDirectoryNotEmptyError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemdirectorynotemptyerror)
[SandboxFilesystemError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemerror)
[SandboxFilesystemFileTooLargeError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemfiletoolargeerror)
[SandboxFilesystemIsADirectoryError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemisadirectoryerror)
[SandboxFilesystemNotADirectoryError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemnotadirectoryerror)
[SandboxFilesystemNotFoundError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystemnotfounderror)
[SandboxFilesystemPathAlreadyExistsError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystempathalreadyexistserror)
[SandboxFilesystemPermissionError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxfilesystempermissionerror)
[SandboxTerminatedError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxterminatederror)
[SandboxTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsandboxtimeouterror)
[SerializationError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionserializationerror)
[ServerWarning](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionserverwarning)
[ServiceError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionserviceerror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-9)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-9)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-9)
[TimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptiontimeouterror)
[UnimplementedError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionunimplementederror)
[message](https://modal.com/docs/sdk/py/latest/modal.exception#message-10)
[status](https://modal.com/docs/sdk/py/latest/modal.exception#status-10)
[details](https://modal.com/docs/sdk/py/latest/modal.exception#details-10)
[VersionError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionversionerror)
[VolumeUploadTimeoutError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionvolumeuploadtimeouterror)
[WorkspaceManagementError](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionworkspacemanagementerror)
[simulate_preemption](https://modal.com/docs/sdk/py/latest/modal.exception#modalexceptionsimulate_preemption)
