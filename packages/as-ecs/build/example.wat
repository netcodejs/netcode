(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i64_i32_=>_none (func (param i32 i64 i32)))
 (type $i64_i32_=>_i32 (func (param i64 i32) (result i32)))
 (type $i32_i64_i32_i32_=>_none (func (param i32 i64 i32 i32)))
 (import "wasi_snapshot_preview1" "fd_write" (func $~lib/bindings/wasi_snapshot_preview1/fd_write (param i32 i32 i32 i32) (result i32)))
 (import "wasi_snapshot_preview1" "proc_exit" (func $~lib/bindings/wasi_snapshot_preview1/proc_exit (param i32)))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/ASC_LOW_MEMORY_LIMIT i32 (i32.const 0))
 (global $~lib/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $assembly/component/ComponentType.map (mut i32) (i32.const 0))
 (global $~lib/process/process.stdout i32 (i32.const 1))
 (global $~lib/bindings/wasi/tempbuf i32 (i32.const 688))
 (global $~lib/rt/__rtti_base i32 (i32.const 7616))
 (global $~lib/memory/__data_end i32 (i32.const 7780))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 24164))
 (global $~lib/memory/__heap_base i32 (i32.const 24164))
 (global $~started (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 12) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00U\00n\00p\00a\00i\00r\00e\00d\00 \00s\00u\00r\00r\00o\00g\00a\00t\00e\00\00\00\00\00\00\00\00\00")
 (data (i32.const 76) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s\00")
 (data (i32.const 124) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00\00\00\00\00")
 (data (i32.const 188) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 256) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 288) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 316) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00\00\00\00\00\00\00\00\00")
 (data (i32.const 380) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data (i32.const 432) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 460) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 524) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 572) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 636) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00O\00n\00D\00i\00s\00p\00o\00s\00e\00:\00 \00A\00b\00c\00")
 (data (i32.const 688) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 716) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00S\00U\00C\00C\00E\00S\00S\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 764) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00T\00O\00O\00B\00I\00G\00")
 (data (i32.const 796) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00A\00C\00C\00E\00S\00\00\00")
 (data (i32.const 828) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00A\00D\00D\00R\00I\00N\00U\00S\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 876) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\18\00\00\00A\00D\00D\00R\00N\00O\00T\00A\00V\00A\00I\00L\00\00\00\00\00")
 (data (i32.const 924) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00A\00F\00N\00O\00S\00U\00P\00P\00O\00R\00T\00\00\00\00\00\00\00")
 (data (i32.const 972) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00A\00G\00A\00I\00N\00\00\00")
 (data (i32.const 1004) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00A\00L\00R\00E\00A\00D\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1052) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00B\00A\00D\00F\00\00\00\00\00")
 (data (i32.const 1084) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00B\00A\00D\00M\00S\00G\00")
 (data (i32.const 1116) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00B\00U\00S\00Y\00\00\00\00\00")
 (data (i32.const 1148) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00C\00A\00N\00C\00E\00L\00E\00D\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1196) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00C\00H\00I\00L\00D\00\00\00")
 (data (i32.const 1228) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00C\00O\00N\00N\00A\00B\00O\00R\00T\00E\00D\00\00\00\00\00\00\00")
 (data (i32.const 1276) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00C\00O\00N\00N\00R\00E\00F\00U\00S\00E\00D\00\00\00\00\00\00\00")
 (data (i32.const 1324) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00C\00O\00N\00N\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1372) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00D\00E\00A\00D\00L\00K\00")
 (data (i32.const 1404) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00D\00E\00S\00T\00A\00D\00D\00R\00R\00E\00Q\00\00\00\00\00\00\00")
 (data (i32.const 1452) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00D\00O\00M\00\00\00\00\00\00\00")
 (data (i32.const 1484) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00D\00Q\00U\00O\00T\00\00\00")
 (data (i32.const 1516) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00E\00X\00I\00S\00T\00\00\00")
 (data (i32.const 1548) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00F\00A\00U\00L\00T\00\00\00")
 (data (i32.const 1580) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00F\00B\00I\00G\00\00\00\00\00")
 (data (i32.const 1612) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00H\00O\00S\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00")
 (data (i32.const 1660) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00I\00D\00R\00M\00\00\00\00\00")
 (data (i32.const 1692) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00L\00S\00E\00Q\00\00\00")
 (data (i32.const 1724) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00I\00N\00P\00R\00O\00G\00R\00E\00S\00S\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1772) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00I\00N\00T\00R\00\00\00\00\00")
 (data (i32.const 1804) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00N\00V\00A\00L\00\00\00")
 (data (i32.const 1836) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00I\00O\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1868) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00I\00S\00C\00O\00N\00N\00")
 (data (i32.const 1900) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00S\00D\00I\00R\00\00\00")
 (data (i32.const 1932) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00L\00O\00O\00P\00\00\00\00\00")
 (data (i32.const 1964) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00M\00F\00I\00L\00E\00\00\00")
 (data (i32.const 1996) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00M\00L\00I\00N\00K\00\00\00")
 (data (i32.const 2028) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00M\00S\00G\00S\00I\00Z\00E\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2076) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00M\00U\00L\00T\00I\00H\00O\00P\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2124) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00N\00A\00M\00E\00T\00O\00O\00L\00O\00N\00G\00\00\00\00\00\00\00")
 (data (i32.const 2172) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00E\00T\00D\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2220) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00N\00E\00T\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2268) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00E\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2316) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00F\00I\00L\00E\00\00\00")
 (data (i32.const 2348) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00B\00U\00F\00S\00")
 (data (i32.const 2380) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00D\00E\00V\00\00\00")
 (data (i32.const 2412) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00E\00N\00T\00\00\00")
 (data (i32.const 2444) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00E\00X\00E\00C\00")
 (data (i32.const 2476) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00L\00C\00K\00\00\00")
 (data (i32.const 2508) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00L\00I\00N\00K\00")
 (data (i32.const 2540) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00M\00E\00M\00\00\00")
 (data (i32.const 2572) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00M\00S\00G\00\00\00")
 (data (i32.const 2604) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00O\00P\00R\00O\00T\00O\00O\00P\00T\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2652) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00S\00P\00C\00\00\00")
 (data (i32.const 2684) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00S\00Y\00S\00\00\00")
 (data (i32.const 2716) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00O\00T\00C\00O\00N\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2764) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00T\00D\00I\00R\00")
 (data (i32.const 2796) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00N\00O\00T\00E\00M\00P\00T\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2844) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00N\00O\00T\00R\00E\00C\00O\00V\00E\00R\00A\00B\00L\00E\00")
 (data (i32.const 2892) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00O\00T\00S\00O\00C\00K\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2940) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00T\00S\00U\00P\00")
 (data (i32.const 2972) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00T\00T\00Y\00\00\00")
 (data (i32.const 3004) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00N\00X\00I\00O\00\00\00\00\00")
 (data (i32.const 3036) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00O\00V\00E\00R\00F\00L\00O\00W\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3084) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00O\00W\00N\00E\00R\00D\00E\00A\00D\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3132) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00P\00E\00R\00M\00\00\00\00\00")
 (data (i32.const 3164) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00P\00I\00P\00E\00\00\00\00\00")
 (data (i32.const 3196) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00P\00R\00O\00T\00O\00\00\00")
 (data (i32.const 3228) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00P\00R\00O\00T\00O\00N\00O\00S\00U\00P\00P\00O\00R\00T\00")
 (data (i32.const 3276) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00P\00R\00O\00T\00O\00T\00Y\00P\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3324) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00R\00A\00N\00G\00E\00\00\00")
 (data (i32.const 3356) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00R\00O\00F\00S\00\00\00\00\00")
 (data (i32.const 3388) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00S\00P\00I\00P\00E\00\00\00")
 (data (i32.const 3420) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00S\00R\00C\00H\00\00\00\00\00")
 (data (i32.const 3452) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00S\00T\00A\00L\00E\00\00\00")
 (data (i32.const 3484) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00T\00I\00M\00E\00D\00O\00U\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3532) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00T\00X\00T\00B\00S\00Y\00")
 (data (i32.const 3564) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00X\00D\00E\00V\00\00\00\00\00")
 (data (i32.const 3596) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00O\00T\00C\00A\00P\00A\00B\00L\00E\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3644) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00U\00N\00K\00N\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3692) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00p\00r\00o\00c\00e\00s\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3756) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00\n\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3788) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00O\00n\00D\00i\00s\00p\00o\00s\00e\00:\00 \00C\00d\00e\00")
 (data (i32.const 3836) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00")
 (data (i32.const 3884) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3916) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 3964) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00E\00n\00t\00i\00t\00y\00 \00i\00s\00 \00n\00o\00t\00 \00v\00a\00l\00i\00d\00!\00\00\00\00\00")
 (data (i32.const 4028) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00w\00o\00r\00l\00d\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4092) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4156) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 4204) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 4268) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4396) "\1c\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4428) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00*\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00a\00r\00c\00h\00e\00t\00y\00p\00e\00.\00t\00s\00\00\00")
 (data (i32.const 4492) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\18\00\00\00e\00l\00e\00m\00e\00n\00t\00I\00n\00d\00e\00x\00\00\00\00\00")
 (data (i32.const 4540) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00*\00\00\00 \00<\00 \00t\00h\00i\00s\00.\00e\00l\00e\00m\00e\00n\00t\00L\00e\00n\00g\00t\00h\00\00\00")
 (data (i32.const 4604) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00t\00r\00u\00t\00h\00!\00")
 (data (i32.const 4652) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4700) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4828) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 4892) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\000\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4924) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data (i32.const 5324) "\1c\04\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6380) "\\\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00\00\00\00\00")
 (data (i32.const 6476) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6508) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00c\00h\00u\00n\00k\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6572) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6620) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6668) "L\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00<\00\00\00E\00n\00t\00i\00t\00y\00 \00d\00o\00e\00s\00n\00\'\00t\00 \00h\00a\00s\00 \00c\00o\00m\00p\00o\00n\00e\00n\00t\00:\00 \00")
 (data (i32.const 6748) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00A\00b\00c\00\00\00\00\00\00\00")
 (data (i32.const 6780) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6828) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00e\00x\00a\00m\00p\00l\00e\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 6892) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00,\00 \00\00\00\00\00\00\00\00\00")
 (data (i32.const 6924) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00`\19\00\00\00\00\00\00\00\1b\00\00\00\00\00\00`\19\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 6972) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00C\00d\00e\00\00\00\00\00\00\00")
 (data (i32.const 7004) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7052) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7100) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00`\19\00\00\00\00\00\00\00\1b\00\00\00\00\00\00`\19\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7148) "\1c\00\00\00\00\00\00\00\00\00\00\00\12\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7180) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00o\00f\00f\00s\00e\00t\00:\00 \00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7228) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00(\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7260) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00)\00,\00 \00\00\00\00\00\00\00")
 (data (i32.const 7292) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00)\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7324) "<\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00$\00\00\00 \1c\00\00\00\00\00\00P\1c\00\00\00\00\00\00p\1c\00\00\00\00\00\00P\1c\00\00\00\00\00\00\90\1c\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7388) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7436) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\1c\00\00\00`\19\00\00\00\00\00\00\00\1b\00\00\00\00\00\00\00\1b\00\00\00\00\00\00`\19\00\00")
 (data (i32.const 7484) "\1c\00\00\00\00\00\00\00\00\00\00\00\13\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7516) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00\a0\11\00\00\00\00\00\00\d0\11\00\00\00\00\00\00\10\12\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7564) ",\00\00\00\00\00\00\00\00\00\00\00\11\00\00\00\14\00\00\00`\19\00\00\00\00\00\00\00\1b\00\00\00\00\00\00`\19\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 7616) "\14\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00 \00\00\00\00\00\00\00\10A\02\00\00\00\00\00\00\00\00\00\00\00\00\00\02\t\00\00\00\00\00\00\02\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00 \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10\t\12\00\00\00\00\00\10\01\02\00\00\00\00\00\04A\00\00\00\00\00\00\10A\02\00\00\00\00\00 \00\00\00\00\00\00\00\04A\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (table $0 3 funcref)
 (elem $0 (i32.const 1) $assembly/example/ecsTest~anonymous|0 $assembly/example/ecsTest~anonymous|1)
 (export "add" (func $assembly/example/add))
 (export "Abc#onDispose" (func $assembly/example/Abc#onDispose))
 (export "Abc#get:x" (func $assembly/example/Abc#get:x))
 (export "Abc#set:x" (func $assembly/example/Abc#set:x))
 (export "Abc#constructor" (func $assembly/example/Abc#constructor))
 (export "Cde#onDispose" (func $assembly/example/Cde#onDispose))
 (export "Cde#constructor" (func $assembly/example/Cde#constructor))
 (export "Cde#get:c" (func $assembly/example/Cde#get:c))
 (export "Cde#set:c" (func $assembly/example/Cde#set:c))
 (export "ecsTest" (func $assembly/example/ecsTest))
 (export "memory" (memory $0))
 (export "_start" (func $~start))
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String.UTF8.encodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.set $6
  loop $while-continue|0
   local.get $0
   local.get $5
   i32.lt_u
   local.set $7
   local.get $7
   if
    local.get $0
    i32.load16_u
    local.set $8
    local.get $8
    i32.const 128
    i32.lt_u
    if
     local.get $6
     local.get $8
     i32.store8
     local.get $6
     i32.const 1
     i32.add
     local.set $6
    else
     local.get $8
     i32.const 2048
     i32.lt_u
     if
      local.get $8
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      local.set $9
      local.get $8
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $10
      local.get $6
      local.get $10
      i32.const 8
      i32.shl
      local.get $9
      i32.or
      i32.store16
      local.get $6
      i32.const 2
      i32.add
      local.set $6
     else
      local.get $8
      i32.const 63488
      i32.and
      i32.const 55296
      i32.eq
      if
       local.get $8
       i32.const 56320
       i32.lt_u
       if (result i32)
        local.get $0
        i32.const 2
        i32.add
        local.get $5
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $0
        i32.load16_u offset=2
        local.set $10
        local.get $10
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         i32.const 65536
         local.get $8
         i32.const 1023
         i32.and
         i32.const 10
         i32.shl
         i32.add
         local.get $10
         i32.const 1023
         i32.and
         i32.or
         local.set $8
         local.get $8
         i32.const 18
         i32.shr_u
         i32.const 240
         i32.or
         local.set $9
         local.get $8
         i32.const 12
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $11
         local.get $8
         i32.const 6
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $12
         local.get $8
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $13
         local.get $6
         local.get $13
         i32.const 24
         i32.shl
         local.get $12
         i32.const 16
         i32.shl
         i32.or
         local.get $11
         i32.const 8
         i32.shl
         i32.or
         local.get $9
         i32.or
         i32.store
         local.get $6
         i32.const 4
         i32.add
         local.set $6
         local.get $0
         i32.const 4
         i32.add
         local.set $0
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 0
       i32.ne
       if
        local.get $4
        i32.const 2
        i32.eq
        if
         i32.const 32
         i32.const 96
         i32.const 739
         i32.const 49
         call $~lib/wasi/index/abort
         unreachable
        end
        i32.const 65533
        local.set $8
       end
      end
      local.get $8
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      local.set $10
      local.get $8
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $13
      local.get $8
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $12
      local.get $6
      local.get $13
      i32.const 8
      i32.shl
      local.get $10
      i32.or
      i32.store16
      local.get $6
      local.get $12
      i32.store8 offset=2
      local.get $6
      i32.const 3
      i32.add
      local.set $6
     end
    end
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $3
  if
   local.get $6
   local.tee $7
   i32.const 1
   i32.add
   local.set $6
   local.get $7
   i32.const 0
   i32.store8
  end
  local.get $6
  local.get $2
  i32.sub
 )
 (func $~lib/string/String.UTF8.encodeUnsafe@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 3
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $3
   end
   i32.const 0
   local.set $4
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  call $~lib/string/String.UTF8.encodeUnsafe
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    local.get $0
    i32.const 10
    i32.ge_u
    i32.add
    return
   else
    i32.const 3
    local.get $0
    i32.const 10000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 1000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  else
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    local.get $0
    i32.const 1000000
    i32.ge_u
    i32.add
    return
   else
    i32.const 8
    local.get $0
    i32.const 1000000000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 100000000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/wasi/index/abort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i32.const 0
  i32.const 12
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf
  i32.const 12
  local.set $4
  local.get $4
  i64.const 9071471065260641
  i64.store
  local.get $4
  i32.const 7
  i32.add
  local.set $4
  local.get $0
  i32.const 0
  i32.ne
  if
   local.get $4
   local.get $0
   local.get $0
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  i32.const 544106784
  i32.store
  local.get $4
  i32.const 4
  i32.add
  local.set $4
  local.get $1
  i32.const 0
  i32.ne
  if
   local.get $4
   local.get $1
   local.get $1
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  local.tee $5
  i32.const 1
  i32.add
  local.set $4
  local.get $5
  i32.const 40
  i32.store8
  local.get $2
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-loop|0
   local.get $2
   i32.const 10
   i32.div_u
   local.set $5
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $2
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $5
   local.set $2
   local.get $2
   br_if $do-loop|0
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  local.tee $7
  i32.const 1
  i32.add
  local.set $4
  local.get $7
  i32.const 58
  i32.store8
  local.get $3
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-loop|1
   local.get $3
   i32.const 10
   i32.div_u
   local.set $7
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $3
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $7
   local.set $3
   local.get $3
   br_if $do-loop|1
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  i32.const 2601
  i32.store16
  local.get $4
  i32.const 2
  i32.add
  local.set $4
  i32.const 0
  local.get $4
  i32.const 12
  i32.sub
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len
  i32.const 2
  i32.const 0
  i32.const 1
  i32.const 8
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  drop
  i32.const 255
  call $~lib/bindings/wasi_snapshot_preview1/proc_exit
 )
 (func $~lib/rt/itcms/Object#set:nextWithColor (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
  local.get $0
 )
 (func $~lib/rt/itcms/Object#get:next (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
 )
 (func $~lib/rt/itcms/Object#get:color (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
 )
 (func $~lib/rt/itcms/visitRoots (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/__visit_globals
  global.get $~lib/rt/itcms/pinSpace
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:next
  local.set $2
  loop $while-continue|0
   local.get $2
   local.get $1
   i32.ne
   local.set $3
   local.get $3
   if
    i32.const 1
    drop
    local.get $2
    call $~lib/rt/itcms/Object#get:color
    i32.const 3
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 208
     i32.const 159
     i32.const 16
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $2
    i32.const 20
    i32.add
    local.get $0
    call $~lib/rt/__visit_members
    local.get $2
    call $~lib/rt/itcms/Object#get:next
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:next
  local.set $1
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 1
   drop
   local.get $0
   i32.load offset=8
   i32.const 0
   i32.eq
   if (result i32)
    local.get $0
    global.get $~lib/memory/__heap_base
    i32.lt_u
   else
    i32.const 0
   end
   i32.eqz
   if
    i32.const 0
    i32.const 208
    i32.const 127
    i32.const 18
    call $~lib/wasi/index/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.eqz
  if
   i32.const 0
   i32.const 208
   i32.const 131
   i32.const 16
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.get $2
  call $~lib/rt/itcms/Object#set:prev
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:next
 )
 (func $~lib/rt/__typeinfo (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/rt/__rtti_base
  local.set $1
  local.get $0
  local.get $1
  i32.load
  i32.gt_u
  if
   i32.const 336
   i32.const 400
   i32.const 22
   i32.const 28
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  i32.const 8
  i32.mul
  i32.add
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:isPointerfree (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   call $~lib/rt/__typeinfo
   i32.const 32
   i32.and
   i32.const 0
   i32.ne
  end
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $3
  call $~lib/rt/itcms/Object#set:prev
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if (result i32)
    i32.const 0
    i32.const 208
    i32.const 147
    i32.const 30
    call $~lib/wasi/index/abort
    unreachable
   else
    local.get $1
   end
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  call $~lib/rt/itcms/Object#get:isPointerfree
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  i32.const 0
  drop
  local.get $2
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $2
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/itcms/visitStack (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  local.set $1
  loop $while-continue|0
   local.get $1
   global.get $~lib/memory/__heap_base
   i32.lt_u
   local.set $2
   local.get $2
   if
    local.get $1
    i32.load
    local.get $0
    call $~lib/rt/itcms/__visit
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#get:size (param $0 i32) (result i32)
  i32.const 4
  local.get $0
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
 )
 (func $~lib/rt/tlsf/Root#set:flMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/common/BLOCK#set:mmInfo (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/tlsf/Block#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/Block#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 268
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  i32.const 1
  drop
  local.get $3
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 270
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   local.get $3
   local.tee $6
   i32.const 1073741820
   local.tee $7
   local.get $6
   local.get $7
   i32.lt_u
   select
   local.set $6
   i32.const 31
   local.get $6
   i32.clz
   i32.sub
   local.set $4
   local.get $6
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  i32.const 1
  drop
  local.get $4
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $5
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 284
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load offset=4
  local.set $8
  local.get $1
  i32.load offset=8
  local.set $9
  local.get $8
  if
   local.get $8
   local.get $9
   call $~lib/rt/tlsf/Block#set:next
  end
  local.get $9
  if
   local.get $9
   local.get $8
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $1
  local.get $0
  local.set $10
  local.get $4
  local.set $6
  local.get $5
  local.set $7
  local.get $10
  local.get $6
  i32.const 4
  i32.shl
  local.get $7
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.set $11
   local.get $4
   local.set $10
   local.get $5
   local.set $6
   local.get $9
   local.set $7
   local.get $11
   local.get $10
   i32.const 4
   i32.shl
   local.get $6
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $7
   i32.store offset=96
   local.get $9
   i32.eqz
   if
    local.get $0
    local.set $6
    local.get $4
    local.set $7
    local.get $6
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    local.get $0
    local.set $7
    local.get $4
    local.set $11
    local.get $6
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $6
    local.set $10
    local.get $7
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    local.get $10
    i32.store offset=4
    local.get $6
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     call $~lib/rt/tlsf/Root#set:flMap
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  i32.const 1
  drop
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 201
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 203
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.set $3
  local.get $3
  i32.const 4
  i32.add
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  local.set $4
  local.get $4
  i32.load
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.add
   local.get $3
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $4
   local.get $4
   i32.load
   local.set $5
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.sub
   i32.load
   local.set $3
   local.get $3
   i32.load
   local.set $6
   i32.const 1
   drop
   local.get $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 221
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $3
   call $~lib/rt/tlsf/removeBlock
   local.get $3
   local.set $1
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $7
  i32.const 1
  drop
  local.get $7
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 233
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  i32.const 1
  drop
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 234
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $7
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $8
   local.get $7
   i32.const 4
   i32.shr_u
   local.set $9
  else
   local.get $7
   local.tee $3
   i32.const 1073741820
   local.tee $6
   local.get $3
   local.get $6
   i32.lt_u
   select
   local.set $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $8
   local.get $3
   local.get $8
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $9
   local.get $8
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $8
  end
  i32.const 1
  drop
  local.get $8
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $9
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 251
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $10
  local.get $8
  local.set $3
  local.get $9
  local.set $6
  local.get $10
  local.get $3
  i32.const 4
  i32.shl
  local.get $6
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $11
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $1
  local.get $11
  call $~lib/rt/tlsf/Block#set:next
  local.get $11
  if
   local.get $11
   local.get $1
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $0
  local.set $12
  local.get $8
  local.set $10
  local.get $9
  local.set $3
  local.get $1
  local.set $6
  local.get $12
  local.get $10
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $6
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $8
  i32.shl
  i32.or
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $0
  local.set $13
  local.get $8
  local.set $12
  local.get $0
  local.set $3
  local.get $8
  local.set $6
  local.get $3
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 1
  local.get $9
  i32.shl
  i32.or
  local.set $10
  local.get $13
  local.get $12
  i32.const 2
  i32.shl
  i32.add
  local.get $10
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  i32.const 1
  drop
  local.get $1
  local.get $2
  i32.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 377
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $2
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  if
   i32.const 1
   drop
   local.get $1
   local.get $4
   i32.const 4
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 384
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $4
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $4
    i32.load
    local.set $5
   else
    nop
   end
  else
   i32.const 1
   drop
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 397
    i32.const 5
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.set $6
  local.get $6
  i32.const 4
  i32.const 12
  i32.add
  i32.const 4
  i32.add
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $6
  i32.const 2
  i32.const 4
  i32.mul
  i32.sub
  local.set $7
  local.get $1
  local.set $8
  local.get $8
  local.get $7
  i32.const 1
  i32.or
  local.get $5
  i32.const 2
  i32.and
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:next
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.set $4
  local.get $4
  i32.const 0
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.set $9
  local.get $4
  local.set $3
  local.get $9
  local.get $3
  i32.store offset=1568
  local.get $0
  local.get $8
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  i32.const 0
  drop
  global.get $~lib/memory/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $0
  memory.size
  local.set $1
  local.get $0
  i32.const 1572
  i32.add
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $2
  local.get $2
  local.get $1
  i32.gt_s
  if (result i32)
   local.get $2
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  local.get $0
  local.set $3
  local.get $3
  i32.const 0
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $3
  local.set $5
  i32.const 0
  local.set $4
  local.get $5
  local.get $4
  i32.store offset=1568
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   i32.const 23
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $3
    local.set $8
    local.get $5
    local.set $7
    i32.const 0
    local.set $6
    local.get $8
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    local.get $6
    i32.store offset=4
    i32.const 0
    local.set $8
    loop $for-loop|1
     local.get $8
     i32.const 16
     i32.lt_u
     local.set $7
     local.get $7
     if
      local.get $3
      local.set $11
      local.get $5
      local.set $10
      local.get $8
      local.set $9
      i32.const 0
      local.set $6
      local.get $11
      local.get $10
      i32.const 4
      i32.shl
      local.get $9
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $6
      i32.store offset=96
      local.get $8
      i32.const 1
      i32.add
      local.set $8
      br $for-loop|1
     end
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 1572
  i32.add
  local.set $12
  i32.const 0
  drop
  local.get $3
  local.get $12
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
  local.get $3
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 559
   i32.const 3
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   return
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/checkUsedBlock
  call $~lib/rt/tlsf/freeBlock
 )
 (func $~lib/rt/itcms/free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:nextWithColor
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:prev
  else
   global.get $~lib/rt/itcms/total
   local.get $0
   call $~lib/rt/itcms/Object#get:size
   i32.sub
   global.set $~lib/rt/itcms/total
   i32.const 0
   drop
   local.get $0
   i32.const 4
   i32.add
   call $~lib/rt/tlsf/__free
  end
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      local.set $1
      local.get $1
      i32.const 0
      i32.eq
      br_if $case0|0
      local.get $1
      i32.const 1
      i32.eq
      br_if $case1|0
      local.get $1
      i32.const 2
      i32.eq
      br_if $case2|0
      br $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     i32.const 0
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     i32.const 1
     i32.mul
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     local.set $2
     local.get $2
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      call $~lib/rt/itcms/Object#get:color
      local.get $1
      i32.ne
      if
       local.get $0
       local.get $1
       call $~lib/rt/itcms/Object#set:color
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       i32.const 0
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       i32.const 1
       i32.mul
       return
      end
      local.get $0
      call $~lib/rt/itcms/Object#get:next
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    i32.const 0
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    local.get $0
    global.get $~lib/rt/itcms/toSpace
    i32.eq
    if
     i32.const 0
     call $~lib/rt/itcms/visitStack
     global.get $~lib/rt/itcms/iter
     call $~lib/rt/itcms/Object#get:next
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      local.set $2
      local.get $2
      if
       local.get $0
       call $~lib/rt/itcms/Object#get:color
       local.get $1
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/rt/itcms/Object#set:color
        local.get $0
        i32.const 20
        i32.add
        i32.const 0
        call $~lib/rt/__visit_members
       end
       local.get $0
       call $~lib/rt/itcms/Object#get:next
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $2
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $2
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $2
     call $~lib/rt/itcms/Object#get:next
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    i32.const 1
    i32.mul
    return
   end
   global.get $~lib/rt/itcms/iter
   local.set $0
   local.get $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    call $~lib/rt/itcms/Object#get:next
    global.set $~lib/rt/itcms/iter
    i32.const 1
    drop
    local.get $0
    call $~lib/rt/itcms/Object#get:color
    global.get $~lib/rt/itcms/white
    i32.eqz
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 208
     i32.const 228
     i32.const 20
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $0
    call $~lib/rt/itcms/free
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:nextWithColor
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:prev
   i32.const 0
   global.set $~lib/rt/itcms/state
   br $break|0
  end
  i32.const 0
 )
 (func $~lib/rt/itcms/interrupt
  (local $0 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1024
  i32.const 200
  i32.mul
  i32.const 100
  i32.div_u
  local.set $0
  loop $do-loop|0
   local.get $0
   call $~lib/rt/itcms/step
   i32.sub
   local.set $0
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.eq
   if
    i32.const 0
    drop
    global.get $~lib/rt/itcms/total
    i64.extend_i32_u
    i64.const 200
    i64.mul
    i64.const 100
    i64.div_u
    i32.wrap_i64
    i32.const 1024
    i32.add
    global.set $~lib/rt/itcms/threshold
    i32.const 0
    drop
    return
   end
   local.get $0
   i32.const 0
   i32.gt_s
   br_if $do-loop|0
  end
  i32.const 0
  drop
  global.get $~lib/rt/itcms/total
  i32.const 1024
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.sub
  i32.const 1024
  i32.lt_u
  i32.mul
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
 )
 (func $~lib/rt/tlsf/computeSize (param $0 i32) (result i32)
  local.get $0
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $0
   i32.const 4
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   i32.const 4
   i32.sub
  end
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 144
   i32.const 480
   i32.const 458
   i32.const 29
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/computeSize
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
   else
    local.get $1
   end
   local.set $4
   i32.const 31
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  i32.const 1
  drop
  local.get $2
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 330
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $6
  i32.const 0
  local.set $7
  local.get $6
  i32.eqz
  if
   local.get $0
   i32.load
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $5
   local.get $5
   i32.eqz
   if
    i32.const 0
    local.set $7
   else
    local.get $5
    i32.ctz
    local.set $2
    local.get $0
    local.set $8
    local.get $2
    local.set $4
    local.get $8
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    i32.const 1
    drop
    local.get $6
    i32.eqz
    if
     i32.const 0
     i32.const 480
     i32.const 343
     i32.const 18
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $0
    local.set $9
    local.get $2
    local.set $8
    local.get $6
    i32.ctz
    local.set $4
    local.get $9
    local.get $8
    i32.const 4
    i32.shl
    local.get $4
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $7
   end
  else
   local.get $0
   local.set $9
   local.get $2
   local.set $8
   local.get $6
   i32.ctz
   local.set $4
   local.get $9
   local.get $8
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   local.set $7
  end
  local.get $7
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i32.const 0
  drop
  local.get $1
  i32.const 536870910
  i32.lt_u
  if
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 4
  local.get $2
  i32.const 16
  i32.shl
  i32.const 4
  i32.sub
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.tee $3
  local.get $4
  local.tee $5
  local.get $3
  local.get $5
  i32.gt_s
  select
  local.set $6
  local.get $6
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  memory.size
  local.set $7
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  local.get $7
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.set $3
  i32.const 1
  drop
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 357
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 4
  i32.const 12
  i32.add
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   i32.load
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $2
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/searchBlock
  local.set $3
  local.get $3
  i32.eqz
  if
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/growMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.set $3
   i32.const 1
   drop
   local.get $3
   i32.eqz
   if
    i32.const 0
    i32.const 480
    i32.const 496
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  i32.const 1
  drop
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 480
   i32.const 498
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  i32.const 0
  drop
  local.get $3
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
 )
 (func $~lib/rt/itcms/Object#set:rtId (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/itcms/Object#set:rtSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i64)
  (local $10 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   i32.const 0
   i32.const 1
   i32.gt_s
   drop
   local.get $3
   i32.eqz
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $3
   i32.add
   local.set $6
   local.get $5
   local.get $4
   i32.store8
   local.get $6
   i32.const 1
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 2
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=1
   local.get $5
   local.get $4
   i32.store8 offset=2
   local.get $6
   i32.const 2
   i32.sub
   local.get $4
   i32.store8
   local.get $6
   i32.const 3
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 6
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=3
   local.get $6
   i32.const 4
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   i32.const 0
   local.get $5
   i32.sub
   i32.const 3
   i32.and
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   local.get $3
   i32.const -4
   i32.and
   local.set $3
   i32.const -1
   i32.const 255
   i32.div_u
   local.get $4
   i32.const 255
   i32.and
   i32.mul
   local.set $8
   local.get $5
   local.get $3
   i32.add
   local.set $6
   local.get $5
   local.get $8
   i32.store
   local.get $6
   i32.const 4
   i32.sub
   local.get $8
   i32.store
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=4
   local.get $5
   local.get $8
   i32.store offset=8
   local.get $6
   i32.const 12
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 8
   i32.sub
   local.get $8
   i32.store
   local.get $3
   i32.const 24
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=12
   local.get $5
   local.get $8
   i32.store offset=16
   local.get $5
   local.get $8
   i32.store offset=20
   local.get $5
   local.get $8
   i32.store offset=24
   local.get $6
   i32.const 28
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 24
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 20
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 16
   i32.sub
   local.get $8
   i32.store
   i32.const 24
   local.get $5
   i32.const 4
   i32.and
   i32.add
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   local.get $8
   i64.extend_i32_u
   local.get $8
   i64.extend_i32_u
   i64.const 32
   i64.shl
   i64.or
   local.set $9
   loop $while-continue|0
    local.get $3
    i32.const 32
    i32.ge_u
    local.set $10
    local.get $10
    if
     local.get $5
     local.get $9
     i64.store
     local.get $5
     local.get $9
     i64.store offset=8
     local.get $5
     local.get $9
     i64.store offset=16
     local.get $5
     local.get $9
     i64.store offset=24
     local.get $3
     i32.const 32
     i32.sub
     local.set $3
     local.get $5
     i32.const 32
     i32.add
     local.set $5
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 144
   i32.const 208
   i32.const 260
   i32.const 31
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   call $~lib/rt/itcms/interrupt
  end
  i32.const 16
  local.get $0
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.set $2
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:rtId
  local.get $2
  local.get $0
  call $~lib/rt/itcms/Object#set:rtSize
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  call $~lib/rt/itcms/Object#get:size
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.set $3
  local.get $3
  i32.const 0
  local.get $0
  call $~lib/memory/memory.fill
  local.get $3
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  i32.const 1
  drop
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 208
   i32.const 294
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 20
  i32.sub
  local.set $3
  local.get $3
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $4
   local.get $4
   call $~lib/rt/itcms/Object#get:color
   local.set $5
   local.get $5
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $4
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    local.get $5
    i32.const 3
    i32.eq
    if (result i32)
     global.get $~lib/rt/itcms/state
     i32.const 1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $start:assembly/component
  memory.size
  i32.const 16
  i32.shl
  global.get $~lib/memory/__heap_base
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 256
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 288
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 432
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
  i32.const 0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#constructor
  global.set $assembly/component/ComponentType.map
 )
 (func $start:assembly/example
  call $start:assembly/component
 )
 (func $assembly/example/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/component/IComponentData#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
 )
 (func $assembly/example/Abc#set:x (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/example/Abc#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 4
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
  call $assembly/component/IComponentData#constructor
  local.set $0
  local.get $0
  i32.const 0
  call $assembly/example/Abc#set:x
  local.get $0
 )
 (func $~lib/bindings/wasi_snapshot_preview1/errnoToString (param $0 i32) (result i32)
  (local $1 i32)
  block $break|0
   block $case76|0
    block $case75|0
     block $case74|0
      block $case73|0
       block $case72|0
        block $case71|0
         block $case70|0
          block $case69|0
           block $case68|0
            block $case67|0
             block $case66|0
              block $case65|0
               block $case64|0
                block $case63|0
                 block $case62|0
                  block $case61|0
                   block $case60|0
                    block $case59|0
                     block $case58|0
                      block $case57|0
                       block $case56|0
                        block $case55|0
                         block $case54|0
                          block $case53|0
                           block $case52|0
                            block $case51|0
                             block $case50|0
                              block $case49|0
                               block $case48|0
                                block $case47|0
                                 block $case46|0
                                  block $case45|0
                                   block $case44|0
                                    block $case43|0
                                     block $case42|0
                                      block $case41|0
                                       block $case40|0
                                        block $case39|0
                                         block $case38|0
                                          block $case37|0
                                           block $case36|0
                                            block $case35|0
                                             block $case34|0
                                              block $case33|0
                                               block $case32|0
                                                block $case31|0
                                                 block $case30|0
                                                  block $case29|0
                                                   block $case28|0
                                                    block $case27|0
                                                     block $case26|0
                                                      block $case25|0
                                                       block $case24|0
                                                        block $case23|0
                                                         block $case22|0
                                                          block $case21|0
                                                           block $case20|0
                                                            block $case19|0
                                                             block $case18|0
                                                              block $case17|0
                                                               block $case16|0
                                                                block $case15|0
                                                                 block $case14|0
                                                                  block $case13|0
                                                                   block $case12|0
                                                                    block $case11|0
                                                                     block $case10|0
                                                                      block $case9|0
                                                                       block $case8|0
                                                                        block $case7|0
                                                                         block $case6|0
                                                                          block $case5|0
                                                                           block $case4|0
                                                                            block $case3|0
                                                                             block $case2|0
                                                                              block $case1|0
                                                                               block $case0|0
                                                                                local.get $0
                                                                                i32.const 65535
                                                                                i32.and
                                                                                local.set $1
                                                                                local.get $1
                                                                                i32.const 0
                                                                                i32.eq
                                                                                br_if $case0|0
                                                                                local.get $1
                                                                                i32.const 1
                                                                                i32.eq
                                                                                br_if $case1|0
                                                                                local.get $1
                                                                                i32.const 2
                                                                                i32.eq
                                                                                br_if $case2|0
                                                                                local.get $1
                                                                                i32.const 3
                                                                                i32.eq
                                                                                br_if $case3|0
                                                                                local.get $1
                                                                                i32.const 4
                                                                                i32.eq
                                                                                br_if $case4|0
                                                                                local.get $1
                                                                                i32.const 5
                                                                                i32.eq
                                                                                br_if $case5|0
                                                                                local.get $1
                                                                                i32.const 6
                                                                                i32.eq
                                                                                br_if $case6|0
                                                                                local.get $1
                                                                                i32.const 7
                                                                                i32.eq
                                                                                br_if $case7|0
                                                                                local.get $1
                                                                                i32.const 8
                                                                                i32.eq
                                                                                br_if $case8|0
                                                                                local.get $1
                                                                                i32.const 9
                                                                                i32.eq
                                                                                br_if $case9|0
                                                                                local.get $1
                                                                                i32.const 10
                                                                                i32.eq
                                                                                br_if $case10|0
                                                                                local.get $1
                                                                                i32.const 11
                                                                                i32.eq
                                                                                br_if $case11|0
                                                                                local.get $1
                                                                                i32.const 12
                                                                                i32.eq
                                                                                br_if $case12|0
                                                                                local.get $1
                                                                                i32.const 13
                                                                                i32.eq
                                                                                br_if $case13|0
                                                                                local.get $1
                                                                                i32.const 14
                                                                                i32.eq
                                                                                br_if $case14|0
                                                                                local.get $1
                                                                                i32.const 15
                                                                                i32.eq
                                                                                br_if $case15|0
                                                                                local.get $1
                                                                                i32.const 16
                                                                                i32.eq
                                                                                br_if $case16|0
                                                                                local.get $1
                                                                                i32.const 17
                                                                                i32.eq
                                                                                br_if $case17|0
                                                                                local.get $1
                                                                                i32.const 18
                                                                                i32.eq
                                                                                br_if $case18|0
                                                                                local.get $1
                                                                                i32.const 19
                                                                                i32.eq
                                                                                br_if $case19|0
                                                                                local.get $1
                                                                                i32.const 20
                                                                                i32.eq
                                                                                br_if $case20|0
                                                                                local.get $1
                                                                                i32.const 21
                                                                                i32.eq
                                                                                br_if $case21|0
                                                                                local.get $1
                                                                                i32.const 22
                                                                                i32.eq
                                                                                br_if $case22|0
                                                                                local.get $1
                                                                                i32.const 23
                                                                                i32.eq
                                                                                br_if $case23|0
                                                                                local.get $1
                                                                                i32.const 24
                                                                                i32.eq
                                                                                br_if $case24|0
                                                                                local.get $1
                                                                                i32.const 25
                                                                                i32.eq
                                                                                br_if $case25|0
                                                                                local.get $1
                                                                                i32.const 26
                                                                                i32.eq
                                                                                br_if $case26|0
                                                                                local.get $1
                                                                                i32.const 27
                                                                                i32.eq
                                                                                br_if $case27|0
                                                                                local.get $1
                                                                                i32.const 28
                                                                                i32.eq
                                                                                br_if $case28|0
                                                                                local.get $1
                                                                                i32.const 29
                                                                                i32.eq
                                                                                br_if $case29|0
                                                                                local.get $1
                                                                                i32.const 30
                                                                                i32.eq
                                                                                br_if $case30|0
                                                                                local.get $1
                                                                                i32.const 31
                                                                                i32.eq
                                                                                br_if $case31|0
                                                                                local.get $1
                                                                                i32.const 32
                                                                                i32.eq
                                                                                br_if $case32|0
                                                                                local.get $1
                                                                                i32.const 33
                                                                                i32.eq
                                                                                br_if $case33|0
                                                                                local.get $1
                                                                                i32.const 34
                                                                                i32.eq
                                                                                br_if $case34|0
                                                                                local.get $1
                                                                                i32.const 35
                                                                                i32.eq
                                                                                br_if $case35|0
                                                                                local.get $1
                                                                                i32.const 36
                                                                                i32.eq
                                                                                br_if $case36|0
                                                                                local.get $1
                                                                                i32.const 37
                                                                                i32.eq
                                                                                br_if $case37|0
                                                                                local.get $1
                                                                                i32.const 38
                                                                                i32.eq
                                                                                br_if $case38|0
                                                                                local.get $1
                                                                                i32.const 39
                                                                                i32.eq
                                                                                br_if $case39|0
                                                                                local.get $1
                                                                                i32.const 40
                                                                                i32.eq
                                                                                br_if $case40|0
                                                                                local.get $1
                                                                                i32.const 41
                                                                                i32.eq
                                                                                br_if $case41|0
                                                                                local.get $1
                                                                                i32.const 42
                                                                                i32.eq
                                                                                br_if $case42|0
                                                                                local.get $1
                                                                                i32.const 43
                                                                                i32.eq
                                                                                br_if $case43|0
                                                                                local.get $1
                                                                                i32.const 44
                                                                                i32.eq
                                                                                br_if $case44|0
                                                                                local.get $1
                                                                                i32.const 45
                                                                                i32.eq
                                                                                br_if $case45|0
                                                                                local.get $1
                                                                                i32.const 46
                                                                                i32.eq
                                                                                br_if $case46|0
                                                                                local.get $1
                                                                                i32.const 47
                                                                                i32.eq
                                                                                br_if $case47|0
                                                                                local.get $1
                                                                                i32.const 48
                                                                                i32.eq
                                                                                br_if $case48|0
                                                                                local.get $1
                                                                                i32.const 49
                                                                                i32.eq
                                                                                br_if $case49|0
                                                                                local.get $1
                                                                                i32.const 50
                                                                                i32.eq
                                                                                br_if $case50|0
                                                                                local.get $1
                                                                                i32.const 51
                                                                                i32.eq
                                                                                br_if $case51|0
                                                                                local.get $1
                                                                                i32.const 52
                                                                                i32.eq
                                                                                br_if $case52|0
                                                                                local.get $1
                                                                                i32.const 53
                                                                                i32.eq
                                                                                br_if $case53|0
                                                                                local.get $1
                                                                                i32.const 54
                                                                                i32.eq
                                                                                br_if $case54|0
                                                                                local.get $1
                                                                                i32.const 55
                                                                                i32.eq
                                                                                br_if $case55|0
                                                                                local.get $1
                                                                                i32.const 56
                                                                                i32.eq
                                                                                br_if $case56|0
                                                                                local.get $1
                                                                                i32.const 57
                                                                                i32.eq
                                                                                br_if $case57|0
                                                                                local.get $1
                                                                                i32.const 58
                                                                                i32.eq
                                                                                br_if $case58|0
                                                                                local.get $1
                                                                                i32.const 59
                                                                                i32.eq
                                                                                br_if $case59|0
                                                                                local.get $1
                                                                                i32.const 60
                                                                                i32.eq
                                                                                br_if $case60|0
                                                                                local.get $1
                                                                                i32.const 61
                                                                                i32.eq
                                                                                br_if $case61|0
                                                                                local.get $1
                                                                                i32.const 62
                                                                                i32.eq
                                                                                br_if $case62|0
                                                                                local.get $1
                                                                                i32.const 63
                                                                                i32.eq
                                                                                br_if $case63|0
                                                                                local.get $1
                                                                                i32.const 64
                                                                                i32.eq
                                                                                br_if $case64|0
                                                                                local.get $1
                                                                                i32.const 65
                                                                                i32.eq
                                                                                br_if $case65|0
                                                                                local.get $1
                                                                                i32.const 66
                                                                                i32.eq
                                                                                br_if $case66|0
                                                                                local.get $1
                                                                                i32.const 67
                                                                                i32.eq
                                                                                br_if $case67|0
                                                                                local.get $1
                                                                                i32.const 68
                                                                                i32.eq
                                                                                br_if $case68|0
                                                                                local.get $1
                                                                                i32.const 69
                                                                                i32.eq
                                                                                br_if $case69|0
                                                                                local.get $1
                                                                                i32.const 70
                                                                                i32.eq
                                                                                br_if $case70|0
                                                                                local.get $1
                                                                                i32.const 71
                                                                                i32.eq
                                                                                br_if $case71|0
                                                                                local.get $1
                                                                                i32.const 72
                                                                                i32.eq
                                                                                br_if $case72|0
                                                                                local.get $1
                                                                                i32.const 73
                                                                                i32.eq
                                                                                br_if $case73|0
                                                                                local.get $1
                                                                                i32.const 74
                                                                                i32.eq
                                                                                br_if $case74|0
                                                                                local.get $1
                                                                                i32.const 75
                                                                                i32.eq
                                                                                br_if $case75|0
                                                                                local.get $1
                                                                                i32.const 76
                                                                                i32.eq
                                                                                br_if $case76|0
                                                                                br $break|0
                                                                               end
                                                                               i32.const 736
                                                                               return
                                                                              end
                                                                              i32.const 784
                                                                              return
                                                                             end
                                                                             i32.const 816
                                                                             return
                                                                            end
                                                                            i32.const 848
                                                                            return
                                                                           end
                                                                           i32.const 896
                                                                           return
                                                                          end
                                                                          i32.const 944
                                                                          return
                                                                         end
                                                                         i32.const 992
                                                                         return
                                                                        end
                                                                        i32.const 1024
                                                                        return
                                                                       end
                                                                       i32.const 1072
                                                                       return
                                                                      end
                                                                      i32.const 1104
                                                                      return
                                                                     end
                                                                     i32.const 1136
                                                                     return
                                                                    end
                                                                    i32.const 1168
                                                                    return
                                                                   end
                                                                   i32.const 1216
                                                                   return
                                                                  end
                                                                  i32.const 1248
                                                                  return
                                                                 end
                                                                 i32.const 1296
                                                                 return
                                                                end
                                                                i32.const 1344
                                                                return
                                                               end
                                                               i32.const 1392
                                                               return
                                                              end
                                                              i32.const 1424
                                                              return
                                                             end
                                                             i32.const 1472
                                                             return
                                                            end
                                                            i32.const 1504
                                                            return
                                                           end
                                                           i32.const 1536
                                                           return
                                                          end
                                                          i32.const 1568
                                                          return
                                                         end
                                                         i32.const 1600
                                                         return
                                                        end
                                                        i32.const 1632
                                                        return
                                                       end
                                                       i32.const 1680
                                                       return
                                                      end
                                                      i32.const 1712
                                                      return
                                                     end
                                                     i32.const 1744
                                                     return
                                                    end
                                                    i32.const 1792
                                                    return
                                                   end
                                                   i32.const 1824
                                                   return
                                                  end
                                                  i32.const 1856
                                                  return
                                                 end
                                                 i32.const 1888
                                                 return
                                                end
                                                i32.const 1920
                                                return
                                               end
                                               i32.const 1952
                                               return
                                              end
                                              i32.const 1984
                                              return
                                             end
                                             i32.const 2016
                                             return
                                            end
                                            i32.const 2048
                                            return
                                           end
                                           i32.const 2096
                                           return
                                          end
                                          i32.const 2144
                                          return
                                         end
                                         i32.const 2192
                                         return
                                        end
                                        i32.const 2240
                                        return
                                       end
                                       i32.const 2288
                                       return
                                      end
                                      i32.const 2336
                                      return
                                     end
                                     i32.const 2368
                                     return
                                    end
                                    i32.const 2400
                                    return
                                   end
                                   i32.const 2432
                                   return
                                  end
                                  i32.const 2464
                                  return
                                 end
                                 i32.const 2496
                                 return
                                end
                                i32.const 2528
                                return
                               end
                               i32.const 2560
                               return
                              end
                              i32.const 2592
                              return
                             end
                             i32.const 2624
                             return
                            end
                            i32.const 2672
                            return
                           end
                           i32.const 2704
                           return
                          end
                          i32.const 2736
                          return
                         end
                         i32.const 2784
                         return
                        end
                        i32.const 2816
                        return
                       end
                       i32.const 2864
                       return
                      end
                      i32.const 2912
                      return
                     end
                     i32.const 2960
                     return
                    end
                    i32.const 2992
                    return
                   end
                   i32.const 3024
                   return
                  end
                  i32.const 3056
                  return
                 end
                 i32.const 3104
                 return
                end
                i32.const 3152
                return
               end
               i32.const 3184
               return
              end
              i32.const 3216
              return
             end
             i32.const 3248
             return
            end
            i32.const 3296
            return
           end
           i32.const 3344
           return
          end
          i32.const 3376
          return
         end
         i32.const 3408
         return
        end
        i32.const 3440
        return
       end
       i32.const 3472
       return
      end
      i32.const 3504
      return
     end
     i32.const 3552
     return
    end
    i32.const 3584
    return
   end
   i32.const 3616
   return
  end
  i32.const 3664
 )
 (func $~lib/string/String.UTF8.byteLength (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  local.get $1
  i32.const 0
  i32.ne
  local.set $4
  block $while-break|0
   loop $while-continue|0
    local.get $2
    local.get $3
    i32.lt_u
    local.set $5
    local.get $5
    if
     local.get $2
     i32.load16_u
     local.set $6
     local.get $6
     i32.const 128
     i32.lt_u
     if
      local.get $1
      local.get $6
      i32.eqz
      i32.and
      if
       br $while-break|0
      end
      local.get $4
      i32.const 1
      i32.add
      local.set $4
     else
      local.get $6
      i32.const 2048
      i32.lt_u
      if
       local.get $4
       i32.const 2
       i32.add
       local.set $4
      else
       local.get $6
       i32.const 64512
       i32.and
       i32.const 55296
       i32.eq
       if (result i32)
        local.get $2
        i32.const 2
        i32.add
        local.get $3
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $2
        i32.load16_u offset=2
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         local.get $4
         i32.const 4
         i32.add
         local.set $4
         local.get $2
         i32.const 4
         i32.add
         local.set $2
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 3
       i32.add
       local.set $4
      end
     end
     local.get $2
     i32.const 2
     i32.add
     local.set $2
     br $while-continue|0
    end
   end
  end
  local.get $4
 )
 (func $~lib/process/writeString (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $1
  call $~lib/string/String#get:length
  local.set $2
  i32.const 0
  local.set $3
  i32.const 0
  local.set $4
  i32.const 0
  local.set $5
  block $break|0
   block $case4|0
    block $case3|0
     block $case2|0
      block $case1|0
       block $case0|0
        local.get $2
        local.set $6
        local.get $6
        i32.const 4
        i32.eq
        br_if $case0|0
        local.get $6
        i32.const 3
        i32.eq
        br_if $case1|0
        local.get $6
        i32.const 2
        i32.eq
        br_if $case2|0
        local.get $6
        i32.const 1
        i32.eq
        br_if $case3|0
        local.get $6
        i32.const 0
        i32.eq
        br_if $case4|0
        br $break|0
       end
       local.get $1
       i32.load16_u offset=6
       local.set $5
       local.get $5
       i32.const 128
       i32.ge_u
       if
        br $break|0
       end
      end
      local.get $1
      i32.load16_u offset=4
      local.set $4
      local.get $4
      i32.const 128
      i32.ge_u
      if
       br $break|0
      end
     end
     local.get $1
     i32.load16_u offset=2
     local.set $3
     local.get $3
     i32.const 128
     i32.ge_u
     if
      br $break|0
     end
    end
    local.get $1
    i32.load16_u
    local.set $6
    local.get $6
    i32.const 128
    i32.ge_u
    if
     br $break|0
    end
    global.get $~lib/bindings/wasi/tempbuf
    global.get $~lib/bindings/wasi/tempbuf
    i32.const 2
    i32.const 4
    i32.mul
    i32.add
    i32.store
    global.get $~lib/bindings/wasi/tempbuf
    local.get $2
    i32.store offset=4
    global.get $~lib/bindings/wasi/tempbuf
    local.get $6
    local.get $3
    i32.const 8
    i32.shl
    i32.or
    local.get $4
    i32.const 16
    i32.shl
    i32.or
    local.get $5
    i32.const 24
    i32.shl
    i32.or
    i32.store offset=8
    local.get $0
    global.get $~lib/bindings/wasi/tempbuf
    i32.const 1
    global.get $~lib/bindings/wasi/tempbuf
    i32.const 3
    i32.const 4
    i32.mul
    i32.add
    call $~lib/bindings/wasi_snapshot_preview1/fd_write
    local.set $7
    local.get $7
    i32.const 65535
    i32.and
    if
     local.get $7
     call $~lib/bindings/wasi_snapshot_preview1/errnoToString
     i32.const 3712
     i32.const 178
     i32.const 16
     call $~lib/wasi/index/abort
     unreachable
    end
   end
   return
  end
  local.get $1
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  local.set $8
  local.get $8
  call $~lib/rt/tlsf/__alloc
  local.set $9
  local.get $1
  local.get $2
  local.get $9
  i32.const 0
  i32.const 3
  global.set $~argumentsLength
  i32.const 0
  call $~lib/string/String.UTF8.encodeUnsafe@varargs
  local.get $8
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 3712
   i32.const 184
   i32.const 3
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/bindings/wasi/tempbuf
  local.get $9
  i32.store
  global.get $~lib/bindings/wasi/tempbuf
  local.get $8
  i32.store offset=4
  local.get $0
  global.get $~lib/bindings/wasi/tempbuf
  i32.const 1
  global.get $~lib/bindings/wasi/tempbuf
  i32.const 2
  i32.const 4
  i32.mul
  i32.add
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  local.set $10
  local.get $9
  call $~lib/rt/tlsf/__free
  local.get $10
  i32.const 65535
  i32.and
  if
   local.get $10
   call $~lib/bindings/wasi_snapshot_preview1/errnoToString
   i32.const 3712
   i32.const 189
   i32.const 12
   call $~lib/wasi/index/abort
   unreachable
  end
 )
 (func $~lib/process/WritableStream#write<~lib/string/String> (param $0 i32) (param $1 i32)
  i32.const 1
  drop
  local.get $0
  local.get $1
  call $~lib/process/writeString
 )
 (func $assembly/example/Abc#get:x (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $assembly/example/Cde#set:c (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/example/Cde#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 4
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
  call $assembly/component/IComponentData#constructor
  local.set $0
  local.get $0
  i32.const 0
  call $assembly/example/Cde#set:c
  local.get $0
 )
 (func $assembly/example/Cde#get:c (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $assembly/world/World#set:destroyEntityIdStack (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<i32>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<i32>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<i32>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<i32>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $assembly/world/World#set:entityCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $assembly/world/World#set:entityVersions (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<u32>#set:buffer (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/Array<u32>#set:dataStart (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<u32>#set:byteLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/array/Array<u32>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $assembly/world/World#set:entityMasks (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/world/World#set:archetypeMasks (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  loop $while-continue|0
   local.get $2
   if (result i32)
    local.get $1
    i32.const 3
    i32.and
   else
    i32.const 0
   end
   local.set $5
   local.get $5
   if
    local.get $0
    local.tee $6
    i32.const 1
    i32.add
    local.set $0
    local.get $6
    local.get $1
    local.tee $6
    i32.const 1
    i32.add
    local.set $1
    local.get $6
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.const 0
  i32.eq
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 8
    i32.add
    local.set $0
    local.get $1
    i32.const 8
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $1
    i32.const 4
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       local.set $5
       local.get $5
       i32.const 1
       i32.eq
       br_if $case0|2
       local.get $5
       i32.const 2
       i32.eq
       br_if $case1|2
       local.get $5
       i32.const 3
       i32.eq
       br_if $case2|2
       br $break|2
      end
      local.get $1
      i32.load
      local.set $3
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       local.set $5
       local.get $5
       if
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.set $4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 4
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.set $4
        local.get $0
        i32.const 8
        i32.add
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 12
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $3
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      local.set $5
      local.get $5
      if
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.set $4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 4
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 12
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $3
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     local.set $5
     local.get $5
     if
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.set $4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 4
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.set $4
      local.get $0
      i32.const 8
      i32.add
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 12
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
    br $break|2
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $5
   local.get $4
   i32.eq
   if
    br $~lib/util/memory/memmove|inlined.0
   end
   i32.const 0
   i32.const 1
   i32.lt_s
   drop
   local.get $4
   local.get $5
   i32.sub
   local.get $3
   i32.sub
   i32.const 0
   local.get $3
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $5
    local.get $4
    local.get $3
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $5
   local.get $4
   i32.lt_u
   if
    i32.const 0
    i32.const 2
    i32.lt_s
    drop
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $5
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.tee $7
       i32.const 1
       i32.add
       local.set $5
       local.get $7
       local.get $4
       local.tee $7
       i32.const 1
       i32.add
       local.set $4
       local.get $7
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $5
       local.get $4
       i64.load
       i64.store
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       i32.const 8
       i32.add
       local.set $5
       local.get $4
       i32.const 8
       i32.add
       local.set $4
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $3
     local.set $6
     local.get $6
     if
      local.get $5
      local.tee $7
      i32.const 1
      i32.add
      local.set $5
      local.get $7
      local.get $4
      local.tee $7
      i32.const 1
      i32.add
      local.set $4
      local.get $7
      i32.load8_u
      i32.store8
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      br $while-continue|2
     end
    end
   else
    i32.const 0
    i32.const 2
    i32.lt_s
    drop
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $5
      local.get $3
      i32.add
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $5
       local.get $3
       i32.const 1
       i32.sub
       local.tee $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       local.get $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $3
     local.set $6
     local.get $6
     if
      local.get $5
      local.get $3
      i32.const 1
      i32.sub
      local.tee $3
      i32.add
      local.get $4
      local.get $3
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/__newBuffer (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  local.get $1
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $2
  if
   local.get $3
   local.get $2
   local.get $0
   call $~lib/memory/memory.copy
  end
  local.get $3
 )
 (func $assembly/world/World#set:mask2archetypeMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $assembly/entity/Entity#set:id (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/entity/Entity#set:version (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/array/Array<i32>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<i32>#pop (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.lt_s
  if
   i32.const 3936
   i32.const 3856
   i32.const 284
   i32.const 18
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#set:length_
  local.get $2
 )
 (func $~lib/array/Array<u32>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/rt/itcms/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  local.get $1
  local.get $2
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.sub
  i32.le_u
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/Object#set:rtSize
   local.get $0
   return
  end
  local.get $1
  local.get $2
  i32.load offset=12
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $3
  local.get $0
  local.get $1
  local.tee $4
  local.get $2
  i32.load offset=16
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_u
  select
  call $~lib/memory/memory.copy
  local.get $3
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  i32.load offset=8
  local.set $4
  local.get $1
  local.get $4
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 1073741820
   local.get $2
   i32.shr_u
   i32.gt_u
   if
    i32.const 544
    i32.const 3856
    i32.const 18
    i32.const 48
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $5
   local.get $1
   local.tee $6
   i32.const 8
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_u
   select
   local.get $2
   i32.shl
   local.set $6
   local.get $3
   if
    local.get $4
    i32.const 1
    i32.shl
    local.tee $7
    i32.const 1073741820
    local.tee $8
    local.get $7
    local.get $8
    i32.lt_u
    select
    local.tee $8
    local.get $6
    local.tee $7
    local.get $8
    local.get $7
    i32.gt_u
    select
    local.set $6
   end
   local.get $5
   local.get $6
   call $~lib/rt/itcms/__renew
   local.set $8
   local.get $8
   local.get $4
   i32.add
   i32.const 0
   local.get $6
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $8
   local.get $5
   i32.ne
   if
    local.get $0
    local.get $8
    i32.store
    local.get $0
    local.get $8
    i32.store offset=4
    local.get $0
    local.get $8
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $6
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<u32>#set:length (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.const 0
  call $~lib/array/ensureCapacity
  local.get $0
  local.get $1
  call $~lib/array/Array<u32>#set:length_
 )
 (func $~lib/array/Array<u32>#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 336
   i32.const 3856
   i32.const 107
   i32.const 42
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  i32.const 0
  drop
  local.get $2
 )
 (func $~lib/util/hash/HASH<u32> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 4
  i32.const 4
  i32.le_u
  drop
  local.get $0
  local.set $2
  i32.const 4
  local.set $1
  i32.const 0
  i32.const 374761393
  i32.add
  local.get $1
  i32.add
  local.set $3
  local.get $3
  local.get $2
  i32.const -1028477379
  i32.mul
  i32.add
  local.set $3
  local.get $3
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 15
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -2048144777
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 13
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -1028477379
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 16
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  return
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $4
   if
    local.get $3
    i32.load offset=8
    local.set $5
    local.get $5
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     return
    end
    local.get $5
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,assembly/component/ComponentType>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,assembly/component/ComponentType>#find
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 4112
   i32.const 4176
   i32.const 105
   i32.const 17
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
 )
 (func $assembly/component/ComponentType#set:size (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/component/ComponentType#set:isFlag (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store8 offset=4
 )
 (func $assembly/component/ComponentType#set:id (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:value (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:key (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:taggedNext (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $10
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $10
     i32.load
     local.set $12
     local.get $11
     local.get $12
     call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:key
     local.get $11
     local.get $10
     i32.load offset=4
     call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:value
     local.get $12
     call $~lib/util/hash/HASH<u32>
     local.get $1
     i32.and
     local.set $13
     local.get $3
     local.get $13
     i32.const 4
     i32.mul
     i32.add
     local.set $14
     local.get $11
     local.get $14
     i32.load
     call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:taggedNext
     local.get $14
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:bucketsMask
  local.get $0
  local.get $5
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entries
  local.get $0
  local.get $4
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCapacity
  local.get $0
  local.get $0
  i32.load offset=20
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesOffset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<u32>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 0
  drop
 )
 (func $~lib/array/Array<u32>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 336
    i32.const 3856
    i32.const 123
    i32.const 22
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.const 2
   i32.const 1
   call $~lib/array/ensureCapacity
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   call $~lib/array/Array<u32>#set:length_
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<u32>#__uset
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $4
   if
    local.get $3
    i32.load offset=8
    local.set $5
    local.get $5
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     return
    end
    local.get $5
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#find
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 4112
   i32.const 4176
   i32.const 105
   i32.const 17
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
  i32.ge_u
  if
   i32.const 336
   i32.const 4224
   i32.const 130
   i32.const 41
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__uset
 )
 (func $~lib/map/Map<u32,usize>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $4
   if
    local.get $3
    i32.load offset=8
    local.set $5
    local.get $5
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     return
    end
    local.get $5
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/MapEntry<u32,usize>#set:value (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/MapEntry<u32,usize>#set:key (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/map/MapEntry<u32,usize>#set:taggedNext (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/Map<u32,usize>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,usize>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<u32,usize>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,usize>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<u32,usize>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<u32,usize>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $10
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $10
     i32.load
     local.set $12
     local.get $11
     local.get $12
     call $~lib/map/MapEntry<u32,usize>#set:key
     local.get $11
     local.get $10
     i32.load offset=4
     call $~lib/map/MapEntry<u32,usize>#set:value
     local.get $12
     call $~lib/util/hash/HASH<u32>
     local.get $1
     i32.and
     local.set $13
     local.get $3
     local.get $13
     i32.const 4
     i32.mul
     i32.add
     local.set $14
     local.get $11
     local.get $14
     i32.load
     call $~lib/map/MapEntry<u32,usize>#set:taggedNext
     local.get $14
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,usize>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,usize>#set:bucketsMask
  local.get $0
  local.get $5
  call $~lib/map/Map<u32,usize>#set:entries
  local.get $0
  local.get $4
  call $~lib/map/Map<u32,usize>#set:entriesCapacity
  local.get $0
  local.get $0
  i32.load offset=20
  call $~lib/map/Map<u32,usize>#set:entriesOffset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/map/Map<u32,usize>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $assembly/archetype/Archetype#set:mask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/archetype/Archetype#set:size (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $assembly/chunk/Chunk#set:totalSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/memory/heap.alloc (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/tlsf/__alloc
 )
 (func $assembly/chunk/Chunk#set:ptr (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/chunk/Chunk#set:elementSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $assembly/chunk/Chunk#set:elementLength (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $assembly/archetype/Archetype#set:chunks (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/archetype/Archetype#set:componentTypes (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/archetype/Archetype#set:elementLengthPerChunk (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=24
 )
 (func $assembly/archetype/Archetype#set:entityIds (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/utility/SparseSet<i32>#set:payloads (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/utility/SparseSet<i32>#set:_map (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<i32,i32>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<i32,i32>#set:bucketsMask (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/Map<i32,i32>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<i32,i32>#set:entriesCapacity (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/map/Map<i32,i32>#set:entriesOffset (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/map/Map<i32,i32>#set:entriesCount (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $assembly/archetype/Archetype#set:familyId2offsetMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:value (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:key (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:taggedNext (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $10
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $10
     i32.load
     local.set $12
     local.get $11
     local.get $12
     call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:key
     local.get $11
     local.get $10
     i32.load offset=4
     call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:value
     local.get $12
     call $~lib/util/hash/HASH<u32>
     local.get $1
     i32.and
     local.set $13
     local.get $3
     local.get $13
     i32.const 4
     i32.mul
     i32.add
     local.set $14
     local.get $11
     local.get $14
     i32.load
     call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:taggedNext
     local.get $14
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:bucketsMask
  local.get $0
  local.get $5
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entries
  local.get $0
  local.get $4
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCapacity
  local.get $0
  local.get $0
  i32.load offset=20
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesOffset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/util/hash/HASH<i32> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 4
  i32.const 4
  i32.le_u
  drop
  local.get $0
  local.set $2
  i32.const 4
  local.set $1
  i32.const 0
  i32.const 374761393
  i32.add
  local.get $1
  i32.add
  local.set $3
  local.get $3
  local.get $2
  i32.const -1028477379
  i32.mul
  i32.add
  local.set $3
  local.get $3
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 15
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -2048144777
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 13
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  i32.const -1028477379
  i32.mul
  local.set $3
  local.get $3
  local.get $3
  i32.const 16
  i32.shr_u
  i32.xor
  local.set $3
  local.get $3
  return
 )
 (func $~lib/map/Map<i32,i32>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $4
   if
    local.get $3
    i32.load offset=8
    local.set $5
    local.get $5
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     return
    end
    local.get $5
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<i32,i32>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<i32>
  call $~lib/map/Map<i32,i32>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<i32,i32>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<i32>
  call $~lib/map/Map<i32,i32>#find
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 4112
   i32.const 4176
   i32.const 105
   i32.const 17
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
 )
 (func $~lib/array/Array<i32>#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 336
   i32.const 3856
   i32.const 107
   i32.const 42
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  i32.const 0
  drop
  local.get $2
 )
 (func $~lib/map/MapEntry<i32,i32>#set:value (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/map/MapEntry<i32,i32>#set:key (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/map/MapEntry<i32,i32>#set:taggedNext (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/map/Map<i32,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $10
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $10
     i32.load
     local.set $12
     local.get $11
     local.get $12
     call $~lib/map/MapEntry<i32,i32>#set:key
     local.get $11
     local.get $10
     i32.load offset=4
     call $~lib/map/MapEntry<i32,i32>#set:value
     local.get $12
     call $~lib/util/hash/HASH<i32>
     local.get $1
     i32.and
     local.set $13
     local.get $3
     local.get $13
     i32.const 4
     i32.mul
     i32.add
     local.set $14
     local.get $11
     local.get $14
     i32.load
     call $~lib/map/MapEntry<i32,i32>#set:taggedNext
     local.get $14
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.get $3
  call $~lib/map/Map<i32,i32>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<i32,i32>#set:bucketsMask
  local.get $0
  local.get $5
  call $~lib/map/Map<i32,i32>#set:entries
  local.get $0
  local.get $4
  call $~lib/map/Map<i32,i32>#set:entriesCapacity
  local.get $0
  local.get $0
  i32.load offset=20
  call $~lib/map/Map<i32,i32>#set:entriesOffset
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<i32>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 0
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  call $~lib/array/Array<i32>#set:length_
  local.get $3
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#set:length_ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#push (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  call $~lib/array/Array<assembly/chunk/Chunk>#set:length_
  local.get $3
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (local $11 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $4
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 100
    i32.div_u
    local.set $6
    local.get $5
    i32.const 100
    i32.rem_u
    local.set $7
    i32.const 4924
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    i32.const 4924
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $9
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $8
    local.get $9
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $while-continue|0
   end
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $3
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $10
   local.get $3
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 4924
   local.get $10
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 4924
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  else
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store16
  end
 )
 (func $~lib/util/number/utoa_hex_lut (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  loop $while-continue|0
   local.get $2
   i32.const 2
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $2
    i32.const 2
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 5344
    local.get $1
    i32.wrap_i64
    i32.const 255
    i32.and
    i32.const 2
    i32.shl
    i32.add
    i32.load
    i32.store
    local.get $1
    i64.const 8
    i64.shr_u
    local.set $1
    br $while-continue|0
   end
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   i32.const 5344
   local.get $1
   i32.wrap_i64
   i32.const 6
   i32.shl
   i32.add
   i32.load16_u
   i32.store16
  end
 )
 (func $~lib/util/number/ulog_base (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  local.get $1
  local.set $2
  local.get $2
  i32.popcnt
  i32.const 1
  i32.eq
  if
   i32.const 63
   local.get $0
   i64.clz
   i32.wrap_i64
   i32.sub
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   i32.div_u
   i32.const 1
   i32.add
   return
  end
  local.get $1
  i64.extend_i32_s
  local.set $3
  local.get $3
  local.set $4
  i32.const 1
  local.set $5
  loop $while-continue|0
   local.get $0
   local.get $4
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $4
    i64.div_u
    local.set $0
    local.get $4
    local.get $4
    i64.mul
    local.set $4
    local.get $5
    i32.const 1
    i32.shl
    local.set $5
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   i64.const 1
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $3
    i64.div_u
    local.set $0
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $while-continue|1
   end
  end
  local.get $5
  i32.const 1
  i32.sub
 )
 (func $~lib/util/number/utoa64_any_core (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  local.get $3
  i64.extend_i32_s
  local.set $4
  local.get $3
  local.get $3
  i32.const 1
  i32.sub
  i32.and
  i32.const 0
  i32.eq
  if
   local.get $3
   i32.ctz
   i32.const 7
   i32.and
   i64.extend_i32_s
   local.set $5
   local.get $4
   i64.const 1
   i64.sub
   local.set $6
   loop $do-loop|0
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 6400
    local.get $1
    local.get $6
    i64.and
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $1
    local.get $5
    i64.shr_u
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|0
   end
  else
   loop $do-loop|1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $1
    local.get $4
    i64.div_u
    local.set $6
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 6400
    local.get $1
    local.get $6
    local.get $4
    i64.mul
    i64.sub
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $6
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|1
   end
  end
 )
 (func $~lib/number/I32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/itoa32
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#join (param $0 i32) (param $1 i32) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  i32.const 1
  i32.lt_s
  drop
  i32.const 1
  drop
  local.get $0
  local.get $0
  call $~lib/staticarray/StaticArray<~lib/string/String>#get:length
  local.get $1
  call $~lib/util/string/joinStringArray
  return
 )
 (func $~lib/array/Array<i32>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 0
  drop
 )
 (func $~lib/array/Array<i32>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 336
    i32.const 3856
    i32.const 123
    i32.const 22
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.const 2
   i32.const 1
   call $~lib/array/ensureCapacity
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   call $~lib/array/Array<i32>#set:length_
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<i32>#__uset
 )
 (func $~lib/map/Map<u32,usize>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,usize>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<u32,usize>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,usize>#find
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 4112
   i32.const 4176
   i32.const 105
   i32.const 17
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/string/String#concat
 )
 (func $~lib/number/Usize#toString (param $0 i32) (param $1 i32) (result i32)
  i32.const 4
  i32.const 4
  i32.eq
  drop
  local.get $0
  local.get $1
  call $~lib/util/number/utoa32
  return
 )
 (func $~lib/rt/tlsf/moveBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  local.set $3
  local.get $3
  i32.const 4
  i32.add
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  call $~lib/memory/memory.copy
  local.get $1
  global.get $~lib/memory/__heap_base
  i32.ge_u
  if
   i32.const 0
   drop
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/freeBlock
  end
  local.get $3
 )
 (func $~lib/rt/tlsf/reallocateBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $2
  call $~lib/rt/tlsf/prepareSize
  local.set $3
  local.get $1
  i32.load
  local.set $4
  local.get $4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $5
  local.get $3
  local.get $5
  i32.le_u
  if
   local.get $0
   local.get $1
   local.get $3
   call $~lib/rt/tlsf/prepareBlock
   i32.const 0
   drop
   local.get $1
   return
  end
  local.get $1
  local.set $6
  local.get $6
  i32.const 4
  i32.add
  local.get $6
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  local.set $7
  local.get $7
  i32.load
  local.set $8
  local.get $8
  i32.const 1
  i32.and
  if
   local.get $5
   i32.const 4
   i32.add
   local.get $8
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $6
   local.get $6
   local.get $3
   i32.ge_u
   if
    local.get $0
    local.get $7
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $4
    i32.const 3
    i32.and
    local.get $6
    i32.or
    call $~lib/rt/common/BLOCK#set:mmInfo
    local.get $0
    local.get $1
    local.get $3
    call $~lib/rt/tlsf/prepareBlock
    i32.const 0
    drop
    local.get $1
    return
   end
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/tlsf/moveBlock
 )
 (func $~lib/rt/tlsf/__realloc (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if (result i32)
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/checkUsedBlock
   local.get $1
   call $~lib/rt/tlsf/moveBlock
  else
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/checkUsedBlock
   local.get $1
   call $~lib/rt/tlsf/reallocateBlock
  end
  i32.const 4
  i32.add
 )
 (func $~lib/memory/heap.realloc (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/__realloc
 )
 (func $~lib/number/U32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/utoa32
 )
 (func $assembly/example/ecsTest~anonymous|1 (param $0 i32) (param $1 i32)
  local.get $1
  i32.load
  i32.const 123
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 54
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
 )
 (func $~lib/rt/__visit_globals (param $0 i32)
  (local $1 i32)
  i32.const 336
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 544
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 3936
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 4288
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 4112
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 144
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 32
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 5344
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 6400
  local.get $0
  call $~lib/rt/itcms/__visit
  global.get $assembly/component/ComponentType.map
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   local.set $5
   local.get $5
   if
    local.get $3
    local.set $6
    local.get $6
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 0
     drop
     i32.const 1
     drop
     local.get $6
     i32.load offset=4
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    i32.const 12
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,assembly/component/ComponentType>#__visit
 )
 (func $assembly/world/World~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=20
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/array/Array<i32>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<i32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#__visit
 )
 (func $~lib/array/Array<u32>#__visit (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<u32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<u32>#__visit
 )
 (func $assembly/archetype/Archetype~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=20
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  i32.load offset=4
  local.set $2
  local.get $2
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/array/Array<assembly/chunk/Chunk>#__visit
 )
 (func $assembly/utility/SparseSet<i32>~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/map/Map<i32,i32>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 0
  drop
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<i32,i32>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<i32,i32>#__visit
 )
 (func $~lib/map/Map<u32,usize>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 0
  drop
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<u32,usize>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,usize>#__visit
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__visit
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   local.set $5
   local.get $5
   if
    local.get $3
    local.set $6
    local.get $6
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 0
     drop
     i32.const 1
     drop
     local.get $6
     i32.load offset=4
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    i32.const 12
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#__visit
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/staticarray/StaticArray<~lib/string/String>#__visit
 )
 (func $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void>#__visit (param $0 i32) (param $1 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void>#__visit
 )
 (func $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void>#__visit (param $0 i32) (param $1 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void>#__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  block $invalid
   block $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void>
    block $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void>
     block $~lib/staticarray/StaticArray<~lib/string/String>
      block $assembly/entity/Entity
       block $~lib/map/Map<u32,assembly/archetype/Archetype>
        block $~lib/staticarray/StaticArray<assembly/component/ComponentType>
         block $~lib/map/Map<u32,usize>
          block $~lib/map/Map<i32,i32>
           block $assembly/utility/SparseSet<i32>
            block $~lib/array/Array<assembly/chunk/Chunk>
             block $assembly/chunk/Chunk
              block $assembly/archetype/Archetype
               block $~lib/array/Array<u32>
                block $~lib/array/Array<i32>
                 block $assembly/world/World
                  block $~lib/map/Map<u32,assembly/component/ComponentType>
                   block $assembly/component/ComponentType
                    block $~lib/arraybuffer/ArrayBufferView
                     block $~lib/string/String
                      block $~lib/arraybuffer/ArrayBuffer
                       local.get $0
                       i32.const 8
                       i32.sub
                       i32.load
                       br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $assembly/component/ComponentType $~lib/map/Map<u32,assembly/component/ComponentType> $assembly/world/World $~lib/array/Array<i32> $~lib/array/Array<u32> $assembly/archetype/Archetype $assembly/chunk/Chunk $~lib/array/Array<assembly/chunk/Chunk> $assembly/utility/SparseSet<i32> $~lib/map/Map<i32,i32> $~lib/map/Map<u32,usize> $~lib/staticarray/StaticArray<assembly/component/ComponentType> $~lib/map/Map<u32,assembly/archetype/Archetype> $assembly/entity/Entity $~lib/staticarray/StaticArray<~lib/string/String> $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void> $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void> $invalid
                      end
                      return
                     end
                     return
                    end
                    local.get $0
                    local.get $1
                    call $~lib/arraybuffer/ArrayBufferView~visit
                    return
                   end
                   return
                  end
                  local.get $0
                  local.get $1
                  call $~lib/map/Map<u32,assembly/component/ComponentType>~visit
                  return
                 end
                 local.get $0
                 local.get $1
                 call $assembly/world/World~visit
                 return
                end
                local.get $0
                local.get $1
                call $~lib/array/Array<i32>~visit
                return
               end
               local.get $0
               local.get $1
               call $~lib/array/Array<u32>~visit
               return
              end
              local.get $0
              local.get $1
              call $assembly/archetype/Archetype~visit
              return
             end
             return
            end
            local.get $0
            local.get $1
            call $~lib/array/Array<assembly/chunk/Chunk>~visit
            return
           end
           local.get $0
           local.get $1
           call $assembly/utility/SparseSet<i32>~visit
           return
          end
          local.get $0
          local.get $1
          call $~lib/map/Map<i32,i32>~visit
          return
         end
         local.get $0
         local.get $1
         call $~lib/map/Map<u32,usize>~visit
         return
        end
        local.get $0
        local.get $1
        call $~lib/staticarray/StaticArray<assembly/component/ComponentType>~visit
        return
       end
       local.get $0
       local.get $1
       call $~lib/map/Map<u32,assembly/archetype/Archetype>~visit
       return
      end
      return
     end
     local.get $0
     local.get $1
     call $~lib/staticarray/StaticArray<~lib/string/String>~visit
     return
    end
    local.get $0
    local.get $1
    call $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%2Cassembly/example/Cde%29=>void>~visit
    return
   end
   local.get $0
   local.get $1
   call $~lib/function/Function<%28assembly/entity/Entity%2Cassembly/example/Abc%29=>void>~visit
   return
  end
  unreachable
 )
 (func $~start
  global.get $~started
  if
   return
  end
  i32.const 1
  global.set $~started
  call $start:assembly/example
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 24192
   i32.const 24240
   i32.const 1
   i32.const 1
   call $~lib/wasi/index/abort
   unreachable
  end
 )
 (func $~lib/console/console.log (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/process/process.stdout
  local.set $1
  local.get $1
  local.get $0
  call $~lib/process/WritableStream#write<~lib/string/String>
  local.get $1
  i32.const 3776
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/process/WritableStream#write<~lib/string/String>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/example/Abc#onDispose (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 656
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/console/console.log
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/example/Cde#onDispose (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 3808
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/console/console.log
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#_resizeEntityVersionArray (param $0 i32)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=8
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/array/Array<u32>#get:length
  f64.convert_i32_s
  f64.const 1.5
  f64.mul
  local.set $1
  local.get $1
  f64.floor
  i32.trunc_f64_s
  local.set $2
  local.get $0
  i32.load offset=8
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $2
  call $~lib/array/Array<u32>#set:length
  local.get $0
  i32.load offset=12
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  local.get $2
  call $~lib/array/Array<u32>#set:length
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#createEntity (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $assembly/entity/Entity#constructor
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load
  local.tee $2
  i32.store offset=4
  local.get $1
  local.get $2
  call $~lib/array/Array<i32>#get:length
  i32.const 0
  i32.gt_s
  if (result i32)
   local.get $2
   call $~lib/array/Array<i32>#pop
  else
   local.get $0
   local.get $0
   i32.load offset=4
   local.tee $3
   i32.const 1
   i32.add
   call $assembly/world/World#set:entityCount
   local.get $3
  end
  call $assembly/entity/Entity#set:id
  local.get $1
  i32.load
  local.get $0
  i32.load offset=8
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $~lib/array/Array<u32>#get:length
  i32.ge_s
  if
   local.get $0
   call $assembly/world/World#_resizeEntityVersionArray
  end
  local.get $1
  local.get $0
  i32.load offset=8
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  call $assembly/entity/Entity#set:version
  local.get $1
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $assembly/component/ComponentType.Get<assembly/example/Abc> (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $assembly/component/ComponentType.map
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#has
  if
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/component/ComponentType.map
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   local.get $1
   i32.const 0
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $0
   i32.store offset=4
   local.get $0
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  i32.const 4
  i32.const 0
  i32.eq
  i32.const 0
  call $assembly/component/ComponentType#constructor
  local.tee $0
  i32.store offset=4
  global.get $assembly/component/ComponentType.map
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 0
  local.get $0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  drop
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/archetype/Archetype#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.get $1
  call $assembly/archetype/Archetype#set:componentTypes
  local.get $0
  local.get $2
  call $assembly/archetype/Archetype#set:elementLengthPerChunk
  local.get $0
  i32.const 0
  call $assembly/archetype/Archetype#set:mask
  local.get $0
  i32.const 0
  call $assembly/archetype/Archetype#set:size
  local.get $0
  i32.const 0
  call $assembly/archetype/Archetype#set:chunks
  local.get $0
  i32.const 0
  call $assembly/utility/SparseSet<i32>#constructor
  call $assembly/archetype/Archetype#set:entityIds
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,usize>#constructor
  call $assembly/archetype/Archetype#set:familyId2offsetMap
  i32.const 0
  local.set $3
  i32.const 0
  local.set $4
  i32.const 0
  local.set $5
  local.get $1
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
  local.set $6
  loop $for-loop|0
   local.get $5
   local.get $6
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    local.get $5
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
    local.tee $8
    i32.store offset=4
    local.get $3
    i32.const 1
    local.get $8
    i32.load offset=8
    i32.shl
    i32.or
    local.set $3
    local.get $0
    i32.load offset=16
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store offset=8
    local.get $9
    local.get $8
    i32.load offset=8
    local.get $4
    call $~lib/map/Map<u32,usize>#set
    drop
    local.get $4
    local.get $8
    i32.load
    i32.add
    local.set $4
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $0
  local.get $3
  call $assembly/archetype/Archetype#set:mask
  local.get $0
  local.get $4
  call $assembly/archetype/Archetype#set:size
  local.get $0
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 2
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $6
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.load offset=4
  local.tee $5
  i32.store offset=16
  local.get $6
  i32.const 0
  i32.const 0
  local.get $4
  local.get $2
  call $assembly/chunk/Chunk#constructor
  call $~lib/array/Array<assembly/chunk/Chunk>#__uset
  local.get $6
  call $assembly/archetype/Archetype#set:chunks
  local.get $0
  local.set $9
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
 )
 (func $assembly/archetype/Archetype#addEntity (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.store
  local.get $2
  i32.load
  local.set $10
  global.get $~lib/memory/__stack_pointer
  local.get $10
  i32.store offset=4
  local.get $10
  call $~lib/array/Array<i32>#get:length
  local.set $2
  local.get $2
  i32.const -1
  i32.gt_s
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 70
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  block $assembly/utility/SparseSet<i32>#add|inlined.0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=12
   local.tee $4
   i32.store offset=8
   local.get $1
   local.set $3
   block $assembly/utility/SparseSet<i32>#has|inlined.0 (result i32)
    local.get $4
    local.set $6
    local.get $3
    local.set $5
    local.get $6
    i32.load offset=4
    local.set $10
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store offset=4
    local.get $10
    local.get $5
    call $~lib/map/Map<i32,i32>#has
    i32.eqz
    if
     i32.const 0
     br $assembly/utility/SparseSet<i32>#has|inlined.0
    end
    local.get $6
    i32.load offset=4
    local.set $10
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store offset=4
    local.get $10
    local.get $5
    call $~lib/map/Map<i32,i32>#get
    local.set $7
    local.get $7
    local.get $6
    i32.load
    local.set $10
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store offset=4
    local.get $10
    call $~lib/array/Array<i32>#get:length
    i32.lt_s
    if (result i32)
     local.get $6
     i32.load
     local.set $10
     global.get $~lib/memory/__stack_pointer
     local.get $10
     i32.store offset=4
     local.get $10
     local.get $7
     call $~lib/array/Array<i32>#__get
     local.get $5
     i32.eq
    else
     i32.const 0
    end
   end
   if
    br $assembly/utility/SparseSet<i32>#add|inlined.0
   end
   local.get $4
   i32.load offset=4
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   local.get $3
   local.get $4
   i32.load
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=12
   local.get $10
   call $~lib/array/Array<i32>#get:length
   call $~lib/map/Map<i32,i32>#set
   drop
   local.get $4
   i32.load
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   local.get $3
   call $~lib/array/Array<i32>#push
   drop
  end
  local.get $2
  local.get $0
  i32.load offset=24
  i32.div_s
  local.set $4
  local.get $2
  local.get $0
  i32.load offset=24
  i32.rem_s
  local.set $3
  local.get $4
  local.get $0
  i32.load offset=8
  local.set $10
  global.get $~lib/memory/__stack_pointer
  local.get $10
  i32.store offset=4
  local.get $10
  call $~lib/array/Array<assembly/chunk/Chunk>#get:length
  i32.ge_s
  if
   local.get $0
   i32.load offset=8
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   i32.const 0
   local.get $0
   i32.load offset=4
   local.get $0
   i32.load offset=24
   call $assembly/chunk/Chunk#constructor
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=12
   local.get $10
   call $~lib/array/Array<assembly/chunk/Chunk>#push
   drop
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.set $10
  global.get $~lib/memory/__stack_pointer
  local.get $10
  i32.store offset=4
  local.get $10
  local.get $4
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $7
  i32.store offset=16
  local.get $7
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 78
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $7
  local.set $6
  local.get $3
  local.set $5
  local.get $5
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $5
   local.get $6
   i32.load offset=12
   i32.lt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $8
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.load offset=12
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $9
   i32.store offset=24
   i32.const 4672
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   i32.const 1
   local.get $8
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 4672
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   i32.const 3
   local.get $9
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 4672
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=4
   local.get $10
   i32.const 6496
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=12
   local.get $10
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 6528
   i32.const 25
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $6
  i32.load
  local.get $5
  local.get $6
  i32.load offset=8
  i32.mul
  i32.add
  local.set $10
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $10
 )
 (func $assembly/utility/SparseSet<i32>#remove (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $assembly/utility/SparseSet<i32>#has|inlined.2 (result i32)
   local.get $0
   local.set $3
   local.get $1
   local.set $2
   local.get $3
   i32.load offset=4
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   local.get $2
   call $~lib/map/Map<i32,i32>#has
   i32.eqz
   if
    i32.const 0
    br $assembly/utility/SparseSet<i32>#has|inlined.2
   end
   local.get $3
   i32.load offset=4
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   local.get $2
   call $~lib/map/Map<i32,i32>#get
   local.set $4
   local.get $4
   local.get $3
   i32.load
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   call $~lib/array/Array<i32>#get:length
   i32.lt_s
   if (result i32)
    local.get $3
    i32.load
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $5
    i32.store
    local.get $5
    local.get $4
    call $~lib/array/Array<i32>#__get
    local.get $2
    i32.eq
   else
    i32.const 0
   end
  end
  i32.eqz
  if
   i32.const -1
   local.set $5
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  local.get $0
  i32.load
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<i32>#pop
  local.set $4
  local.get $1
  local.get $4
  i32.ne
  if
   local.get $0
   i32.load offset=4
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   local.get $1
   call $~lib/map/Map<i32,i32>#get
   local.set $3
   local.get $0
   i32.load offset=4
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   local.get $4
   local.get $3
   call $~lib/map/Map<i32,i32>#set
   drop
   local.get $0
   i32.load
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.store
   local.get $5
   local.get $3
   local.get $4
   call $~lib/array/Array<i32>#__set
   local.get $3
   local.set $5
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   return
  end
  i32.const -1
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $assembly/archetype/Archetype#transferAndRemoveEntity (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 44
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=32
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=40
  block $assembly/utility/SparseSet<i32>#getIndex|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=12
   local.tee $5
   i32.store
   local.get $3
   i32.load
   local.set $4
   block $assembly/utility/SparseSet<i32>#has|inlined.1 (result i32)
    local.get $5
    local.set $7
    local.get $4
    local.set $6
    local.get $7
    i32.load offset=4
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    local.get $6
    call $~lib/map/Map<i32,i32>#has
    i32.eqz
    if
     i32.const 0
     br $assembly/utility/SparseSet<i32>#has|inlined.1
    end
    local.get $7
    i32.load offset=4
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    local.get $6
    call $~lib/map/Map<i32,i32>#get
    local.set $8
    local.get $8
    local.get $7
    i32.load
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    call $~lib/array/Array<i32>#get:length
    i32.lt_s
    if (result i32)
     local.get $7
     i32.load
     local.set $18
     global.get $~lib/memory/__stack_pointer
     local.get $18
     i32.store offset=4
     local.get $18
     local.get $8
     call $~lib/array/Array<i32>#__get
     local.get $6
     i32.eq
    else
     i32.const 0
    end
   end
   i32.eqz
   if
    i32.const -1
    br $assembly/utility/SparseSet<i32>#getIndex|inlined.0
   end
   local.get $5
   i32.load offset=4
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   local.get $4
   call $~lib/map/Map<i32,i32>#get
  end
  local.set $5
  local.get $5
  i32.const -1
  i32.gt_s
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 111
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=12
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store offset=4
  local.get $18
  local.get $3
  i32.load
  call $assembly/utility/SparseSet<i32>#remove
  local.set $4
  local.get $5
  local.get $0
  i32.load offset=24
  i32.div_s
  local.set $8
  local.get $5
  local.get $0
  i32.load offset=24
  i32.rem_s
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store offset=4
  local.get $18
  local.get $8
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $9
  i32.store offset=8
  local.get $7
  local.set $6
  local.get $6
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $6
   local.get $9
   i32.load offset=12
   i32.lt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $10
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $9
   i32.load offset=12
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $11
   i32.store offset=16
   i32.const 6592
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   i32.const 1
   local.get $10
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 6592
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   i32.const 3
   local.get $11
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 6592
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   i32.const 6496
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=20
   local.get $18
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 6528
   i32.const 25
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $9
  i32.load
  local.get $6
  local.get $9
  i32.load offset=8
  i32.mul
  i32.add
  local.set $9
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=16
  local.tee $6
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=16
  local.tee $11
  i32.store offset=16
  i32.const 0
  local.set $10
  local.get $1
  i32.load offset=20
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store offset=4
  local.get $18
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
  local.set $12
  loop $for-loop|0
   local.get $10
   local.get $12
   i32.lt_s
   local.set $13
   local.get $13
   if
    block $for-continue|0
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=20
     local.set $18
     global.get $~lib/memory/__stack_pointer
     local.get $18
     i32.store offset=4
     local.get $18
     local.get $10
     call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
     local.tee $14
     i32.store offset=28
     local.get $14
     i32.load offset=8
     local.set $15
     local.get $11
     local.get $15
     call $~lib/map/Map<u32,usize>#has
     i32.eqz
     if
      br $for-continue|0
     end
     local.get $6
     local.get $15
     call $~lib/map/Map<u32,usize>#get
     local.set $16
     local.get $11
     local.get $15
     call $~lib/map/Map<u32,usize>#get
     local.set $17
     local.get $2
     local.get $16
     i32.add
     local.get $9
     local.get $17
     i32.add
     local.get $14
     i32.load
     call $~lib/memory/memory.copy
    end
    local.get $10
    i32.const 1
    i32.add
    local.set $10
    br $for-loop|0
   end
  end
  local.get $4
  i32.const -1
  i32.gt_s
  if
   local.get $4
   local.get $0
   i32.load offset=24
   i32.div_s
   local.set $12
   local.get $4
   local.get $0
   i32.load offset=24
   i32.rem_s
   local.set $10
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   local.get $12
   call $~lib/array/Array<assembly/chunk/Chunk>#__get
   local.tee $15
   i32.store offset=32
   local.get $10
   local.set $14
   local.get $14
   i32.const 0
   i32.ge_s
   if (result i32)
    local.get $14
    local.get $15
    i32.load offset=12
    i32.lt_s
   else
    i32.const 0
   end
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    local.get $14
    i32.const 10
    call $~lib/number/I32#toString
    local.tee $13
    i32.store offset=36
    global.get $~lib/memory/__stack_pointer
    local.get $15
    i32.load offset=12
    i32.const 10
    call $~lib/number/I32#toString
    local.tee $17
    i32.store offset=40
    i32.const 6640
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    i32.const 1
    local.get $13
    call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
    i32.const 6640
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    i32.const 3
    local.get $17
    call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
    i32.const 6640
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=4
    local.get $18
    i32.const 6496
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store offset=20
    local.get $18
    call $~lib/staticarray/StaticArray<~lib/string/String>#join
    i32.const 6528
    i32.const 25
    i32.const 9
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $15
   i32.load
   local.get $14
   local.get $15
   i32.load offset=8
   i32.mul
   i32.add
   local.set $15
   local.get $9
   local.get $15
   local.get $0
   i32.load offset=4
   call $~lib/memory/memory.copy
   local.get $15
   i32.const 0
   local.get $0
   i32.load offset=4
   call $~lib/memory/memory.fill
  else
   local.get $9
   i32.const 0
   local.get $0
   i32.load offset=4
   call $~lib/memory/memory.fill
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 44
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#_addComponent (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  local.get $2
  i32.load offset=8
  local.set $3
  local.get $0
  i32.load offset=12
  local.set $11
  global.get $~lib/memory/__stack_pointer
  local.get $11
  i32.store
  local.get $11
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $5
  i32.store offset=4
  local.get $5
  local.get $1
  i32.load
  local.tee $6
  local.get $4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  call $~lib/array/Array<u32>#__set
  local.get $5
  local.get $6
  call $~lib/array/Array<u32>#__get
  local.set $5
  i32.const 0
  local.set $6
  local.get $0
  i32.load offset=20
  local.set $11
  global.get $~lib/memory/__stack_pointer
  local.get $11
  i32.store
  local.get $11
  local.get $4
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#has
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=20
   local.set $11
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.store
   local.get $11
   local.get $4
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
   local.tee $6
   i32.store offset=8
  end
  local.get $0
  i32.load offset=20
  local.set $11
  global.get $~lib/memory/__stack_pointer
  local.get $11
  i32.store
  local.get $11
  local.get $5
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#has
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=20
   local.set $11
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.store
   local.get $11
   local.get $5
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
   local.tee $7
   i32.store offset=12
  else
   local.get $6
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    local.get $6
    i32.load offset=20
    local.set $11
    global.get $~lib/memory/__stack_pointer
    local.get $11
    i32.store
    local.get $11
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
    local.tee $8
    i32.store offset=16
    i32.const 0
    local.set $9
    loop $for-loop|0
     local.get $9
     local.get $6
     i32.load offset=20
     local.set $11
     global.get $~lib/memory/__stack_pointer
     local.get $11
     i32.store
     local.get $11
     call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
     i32.lt_s
     local.set $10
     local.get $10
     if
      local.get $8
      local.get $9
      local.get $6
      i32.load offset=20
      local.set $11
      global.get $~lib/memory/__stack_pointer
      local.get $11
      i32.store offset=24
      local.get $11
      local.get $9
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
      local.set $11
      global.get $~lib/memory/__stack_pointer
      local.get $11
      i32.store offset=20
      local.get $11
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
      local.get $9
      i32.const 1
      i32.add
      local.set $9
      br $for-loop|0
     end
    end
   else
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.const 1
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
    local.tee $8
    i32.store offset=16
   end
   local.get $8
   local.get $8
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
   i32.const 1
   i32.sub
   local.get $2
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   local.get $8
   i32.const 128
   call $assembly/archetype/Archetype#constructor
   local.tee $7
   i32.store offset=12
   local.get $0
   i32.load offset=20
   local.set $11
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.store
   local.get $11
   local.get $5
   local.get $7
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#set
   drop
  end
  local.get $7
  local.get $1
  i32.load
  call $assembly/archetype/Archetype#addEntity
  local.set $8
  local.get $6
  i32.const 0
  i32.ne
  if
   local.get $6
   local.get $7
   local.get $8
   local.get $1
   call $assembly/archetype/Archetype#transferAndRemoveEntity
  end
  local.get $8
  local.get $7
  i32.load offset=16
  local.set $11
  global.get $~lib/memory/__stack_pointer
  local.get $11
  i32.store
  local.get $11
  local.get $2
  i32.load offset=8
  call $~lib/map/Map<u32,usize>#get
  i32.add
  local.set $11
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $11
 )
 (func $assembly/world/World#addGetComponent<assembly/example/Abc> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $3
  local.get $1
  local.set $2
  local.get $3
  local.set $5
  local.get $2
  local.set $4
  local.get $4
  i32.const 0
  i32.ne
  if (result i32)
   local.get $4
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $4
   i32.load
   local.get $5
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $4
   i32.load offset=4
   local.get $5
   i32.load offset=8
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.store
   local.get $6
   local.get $4
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Abc>
  local.tee $3
  i32.store offset=4
  local.get $0
  local.get $1
  local.get $3
  call $assembly/world/World#_addComponent
  local.set $2
  local.get $3
  i32.load
  call $~lib/memory/heap.alloc
  local.set $5
  local.get $5
  local.get $2
  local.get $3
  i32.load
  call $~lib/memory/memory.copy
  local.get $5
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/world/World#getComponent<assembly/example/Abc> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  local.get $0
  local.set $3
  local.get $1
  local.set $2
  local.get $3
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.set $7
  local.get $4
  local.set $6
  local.get $7
  local.set $9
  local.get $6
  local.set $8
  local.get $8
  i32.const 0
  i32.ne
  if (result i32)
   local.get $8
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load
   local.get $9
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load offset=4
   local.get $9
   i32.load offset=8
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   local.get $8
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  i32.load offset=12
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $4
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $7
  local.get $7
  i32.const 1
  i32.const 0
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 6688
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 6768
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store offset=4
   local.get $16
   call $~lib/string/String.__concat
   i32.const 4048
   i32.const 137
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=12
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $3
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
  local.tee $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Abc>
  local.tee $7
  i32.store offset=12
  local.get $2
  local.set $6
  local.get $1
  i32.load
  local.set $9
  local.get $7
  local.set $8
  block $assembly/utility/SparseSet<i32>#getIndex|inlined.1 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.load offset=12
   local.tee $5
   i32.store offset=16
   local.get $9
   local.set $4
   block $assembly/utility/SparseSet<i32>#has|inlined.3 (result i32)
    local.get $5
    local.set $11
    local.get $4
    local.set $10
    local.get $11
    i32.load offset=4
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    local.get $10
    call $~lib/map/Map<i32,i32>#has
    i32.eqz
    if
     i32.const 0
     br $assembly/utility/SparseSet<i32>#has|inlined.3
    end
    local.get $11
    i32.load offset=4
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    local.get $10
    call $~lib/map/Map<i32,i32>#get
    local.set $12
    local.get $12
    local.get $11
    i32.load
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    call $~lib/array/Array<i32>#get:length
    i32.lt_s
    if (result i32)
     local.get $11
     i32.load
     local.set $16
     global.get $~lib/memory/__stack_pointer
     local.get $16
     i32.store
     local.get $16
     local.get $12
     call $~lib/array/Array<i32>#__get
     local.get $10
     i32.eq
    else
     i32.const 0
    end
   end
   i32.eqz
   if
    i32.const -1
    br $assembly/utility/SparseSet<i32>#getIndex|inlined.1
   end
   local.get $5
   i32.load offset=4
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   local.get $4
   call $~lib/map/Map<i32,i32>#get
  end
  local.set $5
  local.get $5
  i32.const -1
  i32.gt_s
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 42
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  local.get $6
  i32.load offset=24
  i32.div_s
  local.set $4
  local.get $5
  local.get $6
  i32.load offset=24
  i32.rem_s
  local.set $12
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.load offset=8
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $4
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $13
  i32.store offset=20
  local.get $12
  local.set $11
  local.get $6
  i32.load offset=16
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $8
  i32.load offset=8
  call $~lib/map/Map<u32,usize>#get
  local.set $10
  local.get $11
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $11
   local.get $13
   i32.load offset=12
   i32.lt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $14
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.load offset=12
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $15
   i32.store offset=28
   i32.const 6800
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 1
   local.get $14
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 6800
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 3
   local.get $15
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 6800
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 6496
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store offset=4
   local.get $16
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 6528
   i32.const 14
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $13
  i32.load
  local.get $11
  local.get $13
  i32.load offset=8
  i32.mul
  i32.add
  local.get $10
  i32.add
  local.set $15
  local.get $15
  local.set $12
  local.get $7
  i32.load
  call $~lib/memory/heap.alloc
  local.set $4
  local.get $4
  local.get $12
  local.get $7
  i32.load
  call $~lib/memory/memory.copy
  local.get $4
  local.set $16
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $16
 )
 (func $assembly/component/ComponentType.Get<assembly/example/Cde> (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $assembly/component/ComponentType.map
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 1
  call $~lib/map/Map<u32,assembly/component/ComponentType>#has
  if
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/component/ComponentType.map
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   local.get $1
   i32.const 1
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $0
   i32.store offset=4
   local.get $0
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 4
  i32.const 4
  i32.const 0
  i32.eq
  i32.const 1
  call $assembly/component/ComponentType#constructor
  local.tee $0
  i32.store offset=4
  global.get $assembly/component/ComponentType.map
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 1
  local.get $0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  drop
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/component/release<assembly/example/Cde> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 6992
  local.tee $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 10
  call $~lib/number/Usize#toString
  local.tee $2
  i32.store offset=8
  i32.const 6944
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 1
  local.get $1
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 6944
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 3
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 6944
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 6496
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=16
  local.get $3
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/console/console.log
  local.get $0
  call $assembly/example/Cde#onDispose
  local.get $0
  i32.const 4
  call $~lib/memory/heap.realloc
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#addComponentData<assembly/example/Cde> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $5
  local.get $1
  local.set $4
  local.get $5
  local.set $7
  local.get $4
  local.set $6
  local.get $6
  i32.const 0
  i32.ne
  if (result i32)
   local.get $6
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $6
   i32.load
   local.get $7
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $6
   i32.load offset=4
   local.get $7
   i32.load offset=8
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $6
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Cde>
  local.tee $5
  i32.store offset=4
  local.get $0
  local.get $1
  local.get $5
  call $assembly/world/World#_addComponent
  local.set $4
  local.get $4
  local.get $2
  i32.const 4
  call $~lib/memory/memory.copy
  local.get $3
  if
   local.get $2
   call $assembly/component/release<assembly/example/Cde>
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#getComponent<assembly/example/Cde> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  local.get $0
  local.set $3
  local.get $1
  local.set $2
  local.get $3
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.set $7
  local.get $4
  local.set $6
  local.get $7
  local.set $9
  local.get $6
  local.set $8
  local.get $8
  i32.const 0
  i32.ne
  if (result i32)
   local.get $8
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load
   local.get $9
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load offset=4
   local.get $9
   i32.load offset=8
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   local.get $8
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  i32.load offset=12
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $4
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $7
  local.get $7
  i32.const 1
  i32.const 1
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 6688
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 6992
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store offset=4
   local.get $16
   call $~lib/string/String.__concat
   i32.const 4048
   i32.const 137
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=12
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $3
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
  local.tee $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Cde>
  local.tee $7
  i32.store offset=12
  local.get $2
  local.set $6
  local.get $1
  i32.load
  local.set $9
  local.get $7
  local.set $8
  block $assembly/utility/SparseSet<i32>#getIndex|inlined.2 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $6
   i32.load offset=12
   local.tee $5
   i32.store offset=16
   local.get $9
   local.set $4
   block $assembly/utility/SparseSet<i32>#has|inlined.4 (result i32)
    local.get $5
    local.set $11
    local.get $4
    local.set $10
    local.get $11
    i32.load offset=4
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    local.get $10
    call $~lib/map/Map<i32,i32>#has
    i32.eqz
    if
     i32.const 0
     br $assembly/utility/SparseSet<i32>#has|inlined.4
    end
    local.get $11
    i32.load offset=4
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    local.get $10
    call $~lib/map/Map<i32,i32>#get
    local.set $12
    local.get $12
    local.get $11
    i32.load
    local.set $16
    global.get $~lib/memory/__stack_pointer
    local.get $16
    i32.store
    local.get $16
    call $~lib/array/Array<i32>#get:length
    i32.lt_s
    if (result i32)
     local.get $11
     i32.load
     local.set $16
     global.get $~lib/memory/__stack_pointer
     local.get $16
     i32.store
     local.get $16
     local.get $12
     call $~lib/array/Array<i32>#__get
     local.get $10
     i32.eq
    else
     i32.const 0
    end
   end
   i32.eqz
   if
    i32.const -1
    br $assembly/utility/SparseSet<i32>#getIndex|inlined.2
   end
   local.get $5
   i32.load offset=4
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   local.get $4
   call $~lib/map/Map<i32,i32>#get
  end
  local.set $5
  local.get $5
  i32.const -1
  i32.gt_s
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 42
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  local.get $6
  i32.load offset=24
  i32.div_s
  local.set $4
  local.get $5
  local.get $6
  i32.load offset=24
  i32.rem_s
  local.set $12
  global.get $~lib/memory/__stack_pointer
  local.get $6
  i32.load offset=8
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $4
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $13
  i32.store offset=20
  local.get $12
  local.set $11
  local.get $6
  i32.load offset=16
  local.set $16
  global.get $~lib/memory/__stack_pointer
  local.get $16
  i32.store
  local.get $16
  local.get $8
  i32.load offset=8
  call $~lib/map/Map<u32,usize>#get
  local.set $10
  local.get $11
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $11
   local.get $13
   i32.load offset=12
   i32.lt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $11
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $14
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.load offset=12
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $15
   i32.store offset=28
   i32.const 7024
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 1
   local.get $14
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 7024
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 3
   local.get $15
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 7024
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store
   local.get $16
   i32.const 6496
   local.set $16
   global.get $~lib/memory/__stack_pointer
   local.get $16
   i32.store offset=4
   local.get $16
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 6528
   i32.const 14
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $13
  i32.load
  local.get $11
  local.get $13
  i32.load offset=8
  i32.mul
  i32.add
  local.get $10
  i32.add
  local.set $15
  local.get $15
  local.set $12
  local.get $7
  i32.load
  call $~lib/memory/heap.alloc
  local.set $4
  local.get $4
  local.get $12
  local.get $7
  i32.load
  call $~lib/memory/memory.copy
  local.get $4
  local.set $16
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $16
 )
 (func $assembly/world/World#setComponent<assembly/example/Abc> (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  local.get $0
  local.set $4
  local.get $1
  local.set $3
  local.get $4
  local.set $6
  local.get $3
  local.set $5
  local.get $6
  local.set $8
  local.get $5
  local.set $7
  local.get $8
  local.set $10
  local.get $7
  local.set $9
  local.get $9
  i32.const 0
  i32.ne
  if (result i32)
   local.get $9
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $9
   i32.load
   local.get $10
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $9
   i32.load offset=4
   local.get $10
   i32.load offset=8
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   local.get $9
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $6
  i32.load offset=12
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  local.get $5
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $8
  local.get $8
  i32.const 1
  i32.const 0
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 6688
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   i32.const 6768
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   call $~lib/string/String.__concat
   i32.const 4048
   i32.const 137
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=12
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  local.get $4
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
  local.tee $3
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Abc>
  local.tee $8
  i32.store offset=12
  local.get $3
  i32.load offset=16
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  i32.const 0
  call $~lib/map/Map<u32,usize>#get
  local.set $6
  local.get $3
  local.set $7
  local.get $1
  i32.load
  local.set $10
  local.get $8
  local.set $9
  block $assembly/utility/SparseSet<i32>#getIndex|inlined.3 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $7
   i32.load offset=12
   local.tee $11
   i32.store offset=16
   local.get $10
   local.set $5
   block $assembly/utility/SparseSet<i32>#has|inlined.5 (result i32)
    local.get $11
    local.set $13
    local.get $5
    local.set $12
    local.get $13
    i32.load offset=4
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store
    local.get $18
    local.get $12
    call $~lib/map/Map<i32,i32>#has
    i32.eqz
    if
     i32.const 0
     br $assembly/utility/SparseSet<i32>#has|inlined.5
    end
    local.get $13
    i32.load offset=4
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store
    local.get $18
    local.get $12
    call $~lib/map/Map<i32,i32>#get
    local.set $14
    local.get $14
    local.get $13
    i32.load
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $18
    i32.store
    local.get $18
    call $~lib/array/Array<i32>#get:length
    i32.lt_s
    if (result i32)
     local.get $13
     i32.load
     local.set $18
     global.get $~lib/memory/__stack_pointer
     local.get $18
     i32.store
     local.get $18
     local.get $14
     call $~lib/array/Array<i32>#__get
     local.get $12
     i32.eq
    else
     i32.const 0
    end
   end
   i32.eqz
   if
    i32.const -1
    br $assembly/utility/SparseSet<i32>#getIndex|inlined.3
   end
   local.get $11
   i32.load offset=4
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   local.get $5
   call $~lib/map/Map<i32,i32>#get
  end
  local.set $11
  local.get $11
  i32.const -1
  i32.gt_s
  i32.eqz
  if
   i32.const 0
   i32.const 4448
   i32.const 42
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $11
  local.get $7
  i32.load offset=24
  i32.div_s
  local.set $5
  local.get $11
  local.get $7
  i32.load offset=24
  i32.rem_s
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $7
  i32.load offset=8
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  local.get $5
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $15
  i32.store offset=20
  local.get $14
  local.set $13
  local.get $7
  i32.load offset=16
  local.set $18
  global.get $~lib/memory/__stack_pointer
  local.get $18
  i32.store
  local.get $18
  local.get $9
  i32.load offset=8
  call $~lib/map/Map<u32,usize>#get
  local.set $12
  local.get $13
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $13
   local.get $15
   i32.load offset=12
   i32.lt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $16
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   local.get $15
   i32.load offset=12
   i32.const 10
   call $~lib/number/I32#toString
   local.tee $17
   i32.store offset=28
   i32.const 7072
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   i32.const 1
   local.get $16
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 7072
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   i32.const 3
   local.get $17
   call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
   i32.const 7072
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store
   local.get $18
   i32.const 6496
   local.set $18
   global.get $~lib/memory/__stack_pointer
   local.get $18
   i32.store offset=4
   local.get $18
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 6528
   i32.const 14
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $15
  i32.load
  local.get $13
  local.get $15
  i32.load offset=8
  i32.mul
  i32.add
  local.get $12
  i32.add
  local.set $17
  local.get $17
  local.set $14
  local.get $2
  local.set $5
  local.get $14
  local.get $6
  i32.add
  local.get $5
  local.get $6
  i32.add
  local.get $8
  i32.load
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/example/ecsTest~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load
  i32.const 10
  call $~lib/number/U32#toString
  local.tee $3
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.load
  i32.const 10
  call $~lib/number/U32#toString
  local.tee $4
  i32.store offset=8
  i32.const 7120
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=12
  local.get $5
  i32.const 1
  local.get $3
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 7120
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=12
  local.get $5
  i32.const 3
  local.get $4
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 7120
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=12
  local.get $5
  i32.const 6496
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store offset=16
  local.get $5
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/console/console.log
  local.get $1
  i32.load
  i32.const 123
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 48
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load
  i32.const 222
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 49
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#forEach2<assembly/example/Abc,assembly/example/Cde> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 60
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=32
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=40
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=48
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=56
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#keys
  local.tee $3
  i32.store offset=4
  i32.const 8
  call $~lib/memory/heap.alloc
  local.set $4
  local.get $4
  local.set $5
  i32.const 0
  local.set $6
  loop $for-loop|0
   local.get $6
   local.get $3
   call $~lib/array/Array<u32>#get:length
   i32.lt_s
   local.set $7
   local.get $7
   if
    block $for-continue|0
     local.get $3
     local.get $6
     call $~lib/array/Array<u32>#__get
     local.set $8
     local.get $8
     i32.const 3
     i32.and
     i32.const 3
     i32.ne
     if
      br $for-continue|0
     end
     global.get $~lib/memory/__stack_pointer
     local.get $2
     local.get $8
     call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
     local.tee $9
     i32.store offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $9
     i32.load offset=12
     i32.load
     local.tee $10
     i32.store offset=12
     local.get $9
     local.set $11
     local.get $11
     i32.load offset=16
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=16
     local.get $23
     i32.const 0
     call $~lib/map/Map<u32,usize>#get
     local.set $11
     local.get $9
     local.set $12
     local.get $12
     i32.load offset=16
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=16
     local.get $23
     i32.const 1
     call $~lib/map/Map<u32,usize>#get
     local.set $12
     global.get $~lib/memory/__stack_pointer
     i32.const 6768
     local.tee $13
     i32.store offset=20
     global.get $~lib/memory/__stack_pointer
     local.get $11
     i32.const 10
     call $~lib/number/Usize#toString
     local.tee $14
     i32.store offset=24
     global.get $~lib/memory/__stack_pointer
     i32.const 6992
     local.tee $15
     i32.store offset=28
     global.get $~lib/memory/__stack_pointer
     local.get $12
     i32.const 10
     call $~lib/number/Usize#toString
     local.tee $16
     i32.store offset=32
     i32.const 7344
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=36
     local.get $23
     i32.const 1
     local.get $13
     call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
     i32.const 7344
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=36
     local.get $23
     i32.const 3
     local.get $14
     call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
     i32.const 7344
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=36
     local.get $23
     i32.const 5
     local.get $15
     call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
     i32.const 7344
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=36
     local.get $23
     i32.const 7
     local.get $16
     call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
     i32.const 7344
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=36
     local.get $23
     i32.const 6496
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=40
     local.get $23
     call $~lib/staticarray/StaticArray<~lib/string/String>#join
     local.set $23
     global.get $~lib/memory/__stack_pointer
     local.get $23
     i32.store offset=16
     local.get $23
     call $~lib/console/console.log
     i32.const 0
     local.set $16
     loop $for-loop|1
      local.get $16
      local.get $10
      call $~lib/array/Array<i32>#get:length
      i32.lt_s
      local.set $15
      local.get $15
      if
       local.get $9
       local.set $14
       local.get $16
       local.set $13
       local.get $13
       i32.const 0
       i32.ge_s
       i32.eqz
       if
        i32.const 0
        i32.const 4448
        i32.const 62
        i32.const 9
        call $~lib/wasi/index/abort
        unreachable
       end
       local.get $13
       local.get $14
       i32.load offset=24
       i32.div_s
       local.set $17
       local.get $13
       local.get $14
       i32.load offset=24
       i32.rem_s
       local.set $18
       global.get $~lib/memory/__stack_pointer
       local.get $14
       i32.load offset=8
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=16
       local.get $23
       local.get $17
       call $~lib/array/Array<assembly/chunk/Chunk>#__get
       local.tee $20
       i32.store offset=44
       local.get $18
       local.set $19
       local.get $19
       i32.const 0
       i32.ge_s
       if (result i32)
        local.get $19
        local.get $20
        i32.load offset=12
        i32.lt_s
       else
        i32.const 0
       end
       i32.eqz
       if
        global.get $~lib/memory/__stack_pointer
        local.get $19
        i32.const 10
        call $~lib/number/I32#toString
        local.tee $21
        i32.store offset=48
        global.get $~lib/memory/__stack_pointer
        local.get $20
        i32.load offset=12
        i32.const 10
        call $~lib/number/I32#toString
        local.tee $22
        i32.store offset=52
        i32.const 7408
        local.set $23
        global.get $~lib/memory/__stack_pointer
        local.get $23
        i32.store offset=16
        local.get $23
        i32.const 1
        local.get $21
        call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
        i32.const 7408
        local.set $23
        global.get $~lib/memory/__stack_pointer
        local.get $23
        i32.store offset=16
        local.get $23
        i32.const 3
        local.get $22
        call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
        i32.const 7408
        local.set $23
        global.get $~lib/memory/__stack_pointer
        local.get $23
        i32.store offset=16
        local.get $23
        i32.const 6496
        local.set $23
        global.get $~lib/memory/__stack_pointer
        local.get $23
        i32.store offset=36
        local.get $23
        call $~lib/staticarray/StaticArray<~lib/string/String>#join
        i32.const 6528
        i32.const 25
        i32.const 9
        call $~lib/wasi/index/abort
        unreachable
       end
       local.get $20
       i32.load
       local.get $19
       local.get $20
       i32.load offset=8
       i32.mul
       i32.add
       local.set $18
       local.get $4
       i32.const 0
       i32.add
       local.get $18
       local.get $11
       i32.add
       i32.const 4
       call $~lib/memory/memory.copy
       local.get $4
       i32.const 4
       i32.add
       local.get $18
       local.get $12
       i32.add
       i32.const 4
       call $~lib/memory/memory.copy
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       call $assembly/entity/Entity#constructor
       local.tee $17
       i32.store offset=56
       local.get $17
       local.get $10
       local.get $16
       call $~lib/array/Array<i32>#__get
       call $assembly/entity/Entity#set:id
       local.get $17
       local.get $0
       i32.load offset=8
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=16
       local.get $23
       local.get $17
       i32.load
       call $~lib/array/Array<u32>#__get
       call $assembly/entity/Entity#set:version
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.const 10
       call $~lib/number/Usize#toString
       local.tee $14
       i32.store offset=24
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.load
       i32.const 10
       call $~lib/number/Usize#toString
       local.tee $13
       i32.store offset=20
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.load offset=4
       i32.const 10
       call $~lib/number/Usize#toString
       local.tee $20
       i32.store offset=44
       i32.const 7456
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=36
       local.get $23
       i32.const 1
       local.get $14
       call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
       i32.const 7456
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=36
       local.get $23
       i32.const 3
       local.get $13
       call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
       i32.const 7456
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=36
       local.get $23
       i32.const 5
       local.get $20
       call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
       i32.const 7456
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=36
       local.get $23
       i32.const 6496
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=40
       local.get $23
       call $~lib/staticarray/StaticArray<~lib/string/String>#join
       local.set $23
       global.get $~lib/memory/__stack_pointer
       local.get $23
       i32.store offset=16
       local.get $23
       call $~lib/console/console.log
       local.get $17
       local.get $5
       i32.load
       local.get $5
       i32.load offset=4
       i32.const 3
       global.set $~argumentsLength
       local.get $1
       i32.load
       call_indirect $0 (type $i32_i32_i32_=>_none)
       local.get $16
       i32.const 1
       i32.add
       local.set $16
       br $for-loop|1
      end
     end
    end
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    br $for-loop|0
   end
  end
  local.get $4
  i32.const 8
  call $~lib/memory/heap.realloc
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 60
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#forEach1<assembly/example/Abc> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 40
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=32
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#keys
  local.tee $3
  i32.store offset=4
  i32.const 4
  call $~lib/memory/heap.alloc
  local.set $4
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   local.get $3
   call $~lib/array/Array<u32>#get:length
   i32.lt_s
   local.set $6
   local.get $6
   if
    block $for-continue|0
     local.get $3
     local.get $5
     call $~lib/array/Array<u32>#__get
     local.set $7
     local.get $7
     i32.const 1
     i32.and
     i32.const 1
     i32.ne
     if
      br $for-continue|0
     end
     global.get $~lib/memory/__stack_pointer
     local.get $2
     local.get $7
     call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
     local.tee $8
     i32.store offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.load offset=12
     i32.load
     local.tee $9
     i32.store offset=12
     local.get $9
     call $~lib/array/Array<i32>#get:length
     i32.const 0
     i32.eq
     if
      br $for-continue|0
     end
     local.get $8
     local.set $10
     local.get $10
     i32.load offset=16
     local.set $21
     global.get $~lib/memory/__stack_pointer
     local.get $21
     i32.store offset=16
     local.get $21
     i32.const 0
     call $~lib/map/Map<u32,usize>#get
     local.set $10
     i32.const 0
     local.set $11
     loop $for-loop|1
      local.get $11
      local.get $9
      call $~lib/array/Array<i32>#get:length
      i32.lt_s
      local.set $12
      local.get $12
      if
       local.get $8
       local.set $14
       local.get $11
       local.set $13
       local.get $13
       i32.const 0
       i32.ge_s
       i32.eqz
       if
        i32.const 0
        i32.const 4448
        i32.const 62
        i32.const 9
        call $~lib/wasi/index/abort
        unreachable
       end
       local.get $13
       local.get $14
       i32.load offset=24
       i32.div_s
       local.set $15
       local.get $13
       local.get $14
       i32.load offset=24
       i32.rem_s
       local.set $16
       global.get $~lib/memory/__stack_pointer
       local.get $14
       i32.load offset=8
       local.set $21
       global.get $~lib/memory/__stack_pointer
       local.get $21
       i32.store offset=16
       local.get $21
       local.get $15
       call $~lib/array/Array<assembly/chunk/Chunk>#__get
       local.tee $18
       i32.store offset=20
       local.get $16
       local.set $17
       local.get $17
       i32.const 0
       i32.ge_s
       if (result i32)
        local.get $17
        local.get $18
        i32.load offset=12
        i32.lt_s
       else
        i32.const 0
       end
       i32.eqz
       if
        global.get $~lib/memory/__stack_pointer
        local.get $17
        i32.const 10
        call $~lib/number/I32#toString
        local.tee $19
        i32.store offset=24
        global.get $~lib/memory/__stack_pointer
        local.get $18
        i32.load offset=12
        i32.const 10
        call $~lib/number/I32#toString
        local.tee $20
        i32.store offset=28
        i32.const 7536
        local.set $21
        global.get $~lib/memory/__stack_pointer
        local.get $21
        i32.store offset=16
        local.get $21
        i32.const 1
        local.get $19
        call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
        i32.const 7536
        local.set $21
        global.get $~lib/memory/__stack_pointer
        local.get $21
        i32.store offset=16
        local.get $21
        i32.const 3
        local.get $20
        call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
        i32.const 7536
        local.set $21
        global.get $~lib/memory/__stack_pointer
        local.get $21
        i32.store offset=16
        local.get $21
        i32.const 6496
        local.set $21
        global.get $~lib/memory/__stack_pointer
        local.get $21
        i32.store offset=32
        local.get $21
        call $~lib/staticarray/StaticArray<~lib/string/String>#join
        i32.const 6528
        i32.const 25
        i32.const 9
        call $~lib/wasi/index/abort
        unreachable
       end
       local.get $18
       i32.load
       local.get $17
       local.get $18
       i32.load offset=8
       i32.mul
       i32.add
       local.set $16
       local.get $4
       local.get $16
       local.get $10
       i32.add
       i32.const 4
       call $~lib/memory/memory.copy
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       call $assembly/entity/Entity#constructor
       local.tee $15
       i32.store offset=36
       local.get $15
       local.get $9
       local.get $11
       call $~lib/array/Array<i32>#__get
       call $assembly/entity/Entity#set:id
       local.get $15
       local.get $0
       i32.load offset=8
       local.set $21
       global.get $~lib/memory/__stack_pointer
       local.get $21
       i32.store offset=16
       local.get $21
       local.get $15
       i32.load
       call $~lib/array/Array<u32>#__get
       call $assembly/entity/Entity#set:version
       local.get $15
       local.get $4
       i32.const 2
       global.set $~argumentsLength
       local.get $1
       i32.load
       call_indirect $0 (type $i32_i32_=>_none)
       local.get $11
       i32.const 1
       i32.add
       local.set $11
       br $for-loop|1
      end
     end
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 40
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#removeComponent<assembly/example/Cde> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  local.get $0
  local.set $3
  local.get $1
  local.set $2
  local.get $3
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.set $7
  local.get $4
  local.set $6
  local.get $7
  local.set $9
  local.get $6
  local.set $8
  local.get $8
  i32.const 0
  i32.ne
  if (result i32)
   local.get $8
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load
   local.get $9
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $8
   i32.load offset=4
   local.get $9
   i32.load offset=8
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $8
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  i32.load offset=12
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store
  local.get $13
  local.get $4
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $7
  local.get $7
  i32.const 1
  i32.const 1
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 6688
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 6992
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store offset=4
   local.get $13
   call $~lib/string/String.__concat
   i32.const 4048
   i32.const 137
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=12
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store
  local.get $13
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $3
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/example/Cde>
  local.tee $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $7
  i32.store offset=12
  local.get $7
  local.get $1
  i32.load
  local.tee $5
  local.get $3
  i32.const 1
  local.get $2
  i32.load offset=8
  i32.shl
  i32.const -1
  i32.xor
  i32.and
  call $~lib/array/Array<u32>#__set
  local.get $7
  local.get $5
  call $~lib/array/Array<u32>#__get
  local.set $7
  local.get $2
  i32.load8_u offset=4
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store
  local.get $13
  local.get $3
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
  local.tee $5
  i32.store offset=16
  local.get $0
  i32.load offset=20
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store
  local.get $13
  local.get $7
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#has
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=20
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $7
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#get
   local.tee $4
   i32.store offset=20
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   local.get $5
   i32.load offset=20
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
   i32.const 1
   i32.sub
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
   local.tee $6
   i32.store offset=24
   i32.const 0
   local.set $9
   i32.const 0
   local.set $8
   loop $for-loop|0
    local.get $9
    local.get $5
    i32.load offset=20
    local.set $13
    global.get $~lib/memory/__stack_pointer
    local.get $13
    i32.store
    local.get $13
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
    i32.lt_s
    local.set $10
    local.get $10
    if
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.load offset=20
     local.set $13
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $9
     call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
     local.tee $11
     i32.store offset=28
     local.get $11
     local.get $2
     i32.ne
     if
      local.get $6
      local.get $8
      local.tee $12
      i32.const 1
      i32.add
      local.set $8
      local.get $12
      local.get $11
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
     end
     local.get $9
     i32.const 1
     i32.add
     local.set $9
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   local.get $6
   i32.const 128
   call $assembly/archetype/Archetype#constructor
   local.tee $4
   i32.store offset=20
   local.get $0
   i32.load offset=20
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $7
   local.get $4
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#set
   drop
  end
  local.get $4
  local.get $1
  i32.load
  call $assembly/archetype/Archetype#addEntity
  local.set $6
  local.get $5
  local.get $4
  local.get $6
  local.get $1
  call $assembly/archetype/Archetype#transferAndRemoveEntity
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/component/release<assembly/example/Abc> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  i32.const 1
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 6768
  local.tee $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 10
  call $~lib/number/Usize#toString
  local.tee $2
  i32.store offset=8
  i32.const 7584
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 1
  local.get $1
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 7584
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 3
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 7584
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=12
  local.get $3
  i32.const 6496
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=16
  local.get $3
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/console/console.log
  local.get $0
  call $assembly/example/Abc#onDispose
  local.get $0
  i32.const 4
  call $~lib/memory/heap.realloc
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/example/ecsTest (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $assembly/world/World#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/world/World#createEntity
  local.tee $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $assembly/world/World#addGetComponent<assembly/example/Abc>
  local.set $2
  local.get $0
  local.get $1
  call $assembly/world/World#getComponent<assembly/example/Abc>
  local.set $3
  local.get $3
  local.get $2
  i32.ne
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 30
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.const 123
  call $assembly/example/Abc#set:x
  i32.const 0
  call $assembly/example/Cde#constructor
  local.set $4
  local.get $4
  i32.const 222
  call $assembly/example/Cde#set:c
  local.get $0
  local.get $1
  local.get $4
  i32.const 1
  call $assembly/world/World#addComponentData<assembly/example/Cde>
  local.get $0
  local.get $1
  call $assembly/world/World#getComponent<assembly/example/Cde>
  local.set $5
  local.get $5
  i32.load
  i32.const 222
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 38
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $7
  local.get $1
  local.set $6
  local.get $7
  local.set $9
  local.get $6
  local.set $8
  local.get $9
  local.set $11
  local.get $8
  local.set $10
  local.get $10
  i32.const 0
  i32.ne
  if (result i32)
   local.get $10
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $10
   i32.load
   local.get $11
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $10
   i32.load offset=4
   local.get $11
   i32.load offset=8
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store offset=8
   local.get $13
   local.get $10
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $7
  i32.load offset=12
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store offset=8
  local.get $13
  local.get $6
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $9
  local.get $9
  i32.const 1
  i32.const 0
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 40
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.load
  i32.const 123
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 42
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.load
  i32.const 123
  i32.ne
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 43
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $1
  local.get $2
  call $assembly/world/World#setComponent<assembly/example/Abc>
  local.get $0
  i32.const 7168
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store offset=12
  local.get $13
  call $assembly/world/World#forEach2<assembly/example/Abc,assembly/example/Cde>
  local.get $0
  local.get $1
  call $assembly/world/World#getComponent<assembly/example/Abc>
  local.set $9
  local.get $9
  i32.load
  i32.const 123
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 52
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.const 7504
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store offset=12
  local.get $13
  call $assembly/world/World#forEach1<assembly/example/Abc>
  local.get $0
  local.get $1
  call $assembly/world/World#removeComponent<assembly/example/Cde>
  local.get $0
  local.set $11
  local.get $1
  local.set $10
  local.get $11
  local.set $6
  local.get $10
  local.set $8
  local.get $6
  local.set $12
  local.get $8
  local.set $7
  local.get $7
  i32.const 0
  i32.ne
  if (result i32)
   local.get $7
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $7
   i32.load
   local.get $12
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $7
   i32.load offset=4
   local.get $12
   i32.load offset=8
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store offset=8
   local.get $13
   local.get $7
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $11
  i32.load offset=12
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store offset=8
  local.get $13
  local.get $10
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $6
  local.get $6
  i32.const 1
  i32.const 1
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 58
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $12
  local.get $1
  local.set $7
  local.get $12
  local.set $10
  local.get $7
  local.set $8
  local.get $10
  local.set $6
  local.get $8
  local.set $11
  local.get $11
  i32.const 0
  i32.ne
  if (result i32)
   local.get $11
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $11
   i32.load
   local.get $6
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $11
   i32.load offset=4
   local.get $6
   i32.load offset=8
   local.set $13
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store offset=8
   local.get $13
   local.get $11
   i32.load
   call $~lib/array/Array<u32>#__get
   i32.eq
  else
   i32.const 0
  end
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3984
   i32.const 4048
   i32.const 51
   i32.const 9
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $12
  i32.load offset=12
  local.set $13
  global.get $~lib/memory/__stack_pointer
  local.get $13
  i32.store offset=8
  local.get $13
  local.get $7
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $10
  local.get $10
  i32.const 1
  i32.const 0
  i32.shl
  i32.and
  i32.const 0
  i32.gt_u
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 59
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $assembly/world/World#getComponent<assembly/example/Abc>
  local.set $10
  local.get $10
  i32.load
  i32.const 123
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 6848
   i32.const 62
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  call $assembly/component/release<assembly/example/Abc>
  local.get $3
  call $assembly/component/release<assembly/example/Abc>
  local.get $9
  call $assembly/component/release<assembly/example/Abc>
  local.get $10
  call $assembly/component/release<assembly/example/Abc>
  local.get $10
  i32.load
  local.set $13
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $13
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 544
   i32.const 592
   i32.const 49
   i32.const 43
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 0
  local.get $1
  call $~lib/memory/memory.fill
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/array/Array<i32>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<i32>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 544
   i32.const 3856
   i32.const 65
   i32.const 60
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  local.get $5
  i32.const 0
  local.get $4
  call $~lib/memory/memory.fill
  local.get $0
  local.get $5
  call $~lib/array/Array<i32>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<i32>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<i32>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/array/Array<u32>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:buffer
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:dataStart
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:byteLength
  local.get $0
  i32.const 0
  call $~lib/array/Array<u32>#set:length_
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 544
   i32.const 3856
   i32.const 65
   i32.const 60
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.tee $2
  i32.const 8
  local.tee $3
  local.get $2
  local.get $3
  i32.gt_u
  select
  i32.const 2
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store offset=4
  local.get $5
  i32.const 0
  local.get $4
  call $~lib/memory/memory.fill
  local.get $0
  local.get $5
  call $~lib/array/Array<u32>#set:buffer
  local.get $0
  local.get $5
  call $~lib/array/Array<u32>#set:dataStart
  local.get $0
  local.get $4
  call $~lib/array/Array<u32>#set:byteLength
  local.get $0
  local.get $1
  call $~lib/array/Array<u32>#set:length_
  local.get $0
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.shl
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 0
  local.get $3
  call $~lib/rt/__newBuffer
  local.tee $5
  i32.store
  i32.const 16
  local.get $2
  call $~lib/rt/itcms/__new
  local.set $6
  local.get $6
  local.get $5
  i32.store
  local.get $6
  local.get $5
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $6
  local.get $5
  i32.store offset=4
  local.get $6
  local.get $4
  i32.store offset=8
  local.get $6
  local.get $0
  i32.store offset=12
  local.get $6
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 15
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/world/World#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 0
  call $~lib/array/Array<i32>#constructor
  call $assembly/world/World#set:destroyEntityIdStack
  local.get $0
  i32.const 0
  call $assembly/world/World#set:entityCount
  local.get $0
  i32.const 0
  i32.const 100
  call $~lib/array/Array<u32>#constructor
  call $assembly/world/World#set:entityVersions
  local.get $0
  i32.const 0
  i32.const 100
  call $~lib/array/Array<u32>#constructor
  call $assembly/world/World#set:entityMasks
  local.get $0
  i32.const 0
  i32.const 2
  i32.const 7
  i32.const 3904
  call $~lib/rt/__newArray
  call $assembly/world/World#set:archetypeMasks
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#constructor
  call $assembly/world/World#set:mask2archetypeMap
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/entity/Entity#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 16
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $assembly/entity/Entity#set:id
  local.get $0
  i32.const 0
  call $assembly/entity/Entity#set:version
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/component/ComponentType#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.get $1
  call $assembly/component/ComponentType#set:size
  local.get $0
  local.get $2
  call $assembly/component/ComponentType#set:isFlag
  local.get $0
  local.get $3
  call $assembly/component/ComponentType#set:id
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/util/hash/HASH<u32>
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<u32,assembly/component/ComponentType>#find
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:value
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<u32,assembly/component/ComponentType>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $5
   i32.store
   local.get $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $6
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesOffset
   local.get $6
   i32.const 12
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:key
   i32.const 0
   drop
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:value
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,assembly/component/ComponentType>#set:entriesCount
   local.get $0
   i32.load
   local.get $3
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $6
   local.get $4
   local.get $6
   i32.load
   call $~lib/map/MapEntry<u32,assembly/component/ComponentType>#set:taggedNext
   local.get $6
   local.get $4
   i32.store
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 1073741820
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   i32.const 544
   i32.const 4224
   i32.const 90
   i32.const 60
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 2
  i32.shl
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 14
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $3
  i32.const 0
  local.get $2
  call $~lib/memory/memory.fill
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#get:length
  i32.ge_u
  if
   i32.const 336
   i32.const 4224
   i32.const 115
   i32.const 41
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $2
  i32.store
  i32.const 1
  drop
  i32.const 0
  i32.eqz
  drop
  local.get $2
  i32.eqz
  if
   i32.const 4288
   i32.const 4224
   i32.const 119
   i32.const 40
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/map/Map<u32,usize>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/util/hash/HASH<u32>
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<u32,usize>#find
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,usize>#set:value
   i32.const 0
   drop
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<u32,usize>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $5
   i32.store
   local.get $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $6
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,usize>#set:entriesOffset
   local.get $6
   i32.const 12
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $~lib/map/MapEntry<u32,usize>#set:key
   i32.const 0
   drop
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,usize>#set:value
   i32.const 0
   drop
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,usize>#set:entriesCount
   local.get $0
   i32.load
   local.get $3
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $6
   local.get $4
   local.get $6
   i32.load
   call $~lib/map/MapEntry<u32,usize>#set:taggedNext
   local.get $6
   local.get $4
   i32.store
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $assembly/chunk/Chunk#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.get $1
  call $assembly/chunk/Chunk#set:elementSize
  local.get $0
  local.get $2
  call $assembly/chunk/Chunk#set:elementLength
  local.get $0
  i32.const 0
  call $assembly/chunk/Chunk#set:ptr
  local.get $0
  i32.const 0
  call $assembly/chunk/Chunk#set:totalSize
  local.get $0
  local.get $1
  local.get $2
  i32.mul
  call $assembly/chunk/Chunk#set:totalSize
  local.get $0
  local.get $0
  i32.load offset=4
  call $~lib/memory/heap.alloc
  call $assembly/chunk/Chunk#set:ptr
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/map/Map<i32,i32>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 12
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<i32,i32>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<i32,i32>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<i32,i32>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<i32,i32>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<i32,i32>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<i32,i32>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/utility/SparseSet<i32>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 2
  i32.const 6
  i32.const 4416
  call $~lib/rt/__newArray
  call $assembly/utility/SparseSet<i32>#set:payloads
  local.get $0
  i32.const 0
  call $~lib/map/Map<i32,i32>#constructor
  call $assembly/utility/SparseSet<i32>#set:_map
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/map/Map<u32,usize>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 13
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,usize>#set:buckets
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  call $~lib/map/Map<u32,usize>#set:bucketsMask
  local.get $0
  i32.const 0
  i32.const 4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,usize>#set:entries
  local.get $0
  i32.const 4
  call $~lib/map/Map<u32,usize>#set:entriesCapacity
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,usize>#set:entriesOffset
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,usize>#set:entriesCount
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/util/hash/HASH<u32>
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<u32,assembly/archetype/Archetype>#find
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:value
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<u32,assembly/archetype/Archetype>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $5
   i32.store
   local.get $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $6
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesOffset
   local.get $6
   i32.const 12
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:key
   i32.const 0
   drop
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:value
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   call $~lib/map/Map<u32,assembly/archetype/Archetype>#set:entriesCount
   local.get $0
   i32.load
   local.get $3
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $6
   local.get $4
   local.get $6
   i32.load
   call $~lib/map/MapEntry<u32,assembly/archetype/Archetype>#set:taggedNext
   local.get $6
   local.get $4
   i32.store
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/map/Map<i32,i32>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  call $~lib/util/hash/HASH<i32>
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<i32,i32>#find
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<i32,i32>#set:value
   i32.const 0
   drop
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<i32,i32>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $5
   i32.store
   local.get $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $6
   i32.const 1
   i32.add
   call $~lib/map/Map<i32,i32>#set:entriesOffset
   local.get $6
   i32.const 12
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   call $~lib/map/MapEntry<i32,i32>#set:key
   i32.const 0
   drop
   local.get $4
   local.get $2
   call $~lib/map/MapEntry<i32,i32>#set:value
   i32.const 0
   drop
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   call $~lib/map/Map<i32,i32>#set:entriesCount
   local.get $0
   i32.load
   local.get $3
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $6
   local.get $4
   local.get $6
   i32.load
   call $~lib/map/MapEntry<i32,i32>#set:taggedNext
   local.get $6
   local.get $4
   i32.store
  end
  local.get $0
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 336
   i32.const 3856
   i32.const 107
   i32.const 42
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $2
  i32.store
  i32.const 1
  drop
  i32.const 0
  i32.eqz
  drop
  local.get $2
  i32.eqz
  if
   i32.const 4288
   i32.const 3856
   i32.const 111
   i32.const 40
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $~lib/util/number/itoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 4720
   i32.const 4848
   i32.const 373
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 4912
   local.set $8
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $8
   return
  end
  local.get $0
  i32.const 31
  i32.shr_u
  local.set $2
  local.get $2
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.get $2
   i32.add
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   local.set $7
   local.get $0
   local.set $6
   local.get $4
   local.set $5
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $7
   local.get $6
   local.get $5
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.get $2
    i32.add
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.set $7
    local.get $0
    local.set $6
    local.get $4
    local.set $5
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $7
    local.get $6
    i64.extend_i32_u
    local.get $5
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.set $4
    local.get $4
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.get $2
    i32.add
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $7
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $4
    i64.extend_i32_u
    local.get $7
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
 )
 (func $~lib/util/string/joinStringArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 1
  i32.sub
  local.set $3
  local.get $3
  i32.const 0
  i32.lt_s
  if
   i32.const 6496
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  local.get $3
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $4
   i32.store
   local.get $4
   if (result i32)
    local.get $4
   else
    i32.const 6496
   end
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  i32.const 0
  local.set $5
  i32.const 0
  local.set $4
  loop $for-loop|0
   local.get $4
   local.get $1
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $5
     local.get $6
     call $~lib/string/String#get:length
     i32.add
     local.set $5
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $8
  local.get $2
  call $~lib/string/String#get:length
  local.set $9
  global.get $~lib/memory/__stack_pointer
  local.get $5
  local.get $9
  local.get $3
  i32.mul
  i32.add
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $10
  i32.store offset=8
  i32.const 0
  local.set $4
  loop $for-loop|1
   local.get $4
   local.get $3
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $6
     call $~lib/string/String#get:length
     local.set $11
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $6
     local.get $11
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $8
     local.get $11
     i32.add
     local.set $8
    end
    local.get $9
    if
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $9
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $8
     local.get $9
     i32.add
     local.set $8
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|1
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $3
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $6
  i32.store offset=4
  local.get $6
  i32.const 0
  i32.ne
  if
   local.get $10
   local.get $8
   i32.const 1
   i32.shl
   i32.add
   local.get $6
   local.get $6
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   call $~lib/memory/memory.copy
  end
  local.get $10
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
 )
 (func $~lib/string/String#concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $2
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $3
  local.get $2
  local.get $3
  i32.add
  local.set $4
  local.get $4
  i32.const 0
  i32.eq
  if
   i32.const 6496
   local.set $6
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $6
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $5
  i32.store
  local.get $5
  local.get $0
  local.get $2
  call $~lib/memory/memory.copy
  local.get $5
  local.get $2
  i32.add
  local.get $1
  local.get $3
  call $~lib/memory/memory.copy
  local.get $5
  local.set $6
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $~lib/util/number/utoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 4720
   i32.const 4848
   i32.const 350
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 4912
   local.set $7
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $7
   return
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   local.set $6
   local.get $0
   local.set $5
   local.get $3
   local.set $4
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $6
   local.get $5
   local.get $4
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.set $6
    local.get $0
    local.set $5
    local.get $3
    local.set $4
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $6
    local.get $5
    i64.extend_i32_u
    local.get $4
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    local.get $0
    i64.extend_i32_u
    local.get $3
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  local.set $7
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/map/Map<u32,assembly/archetype/Archetype>#keys (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=8
  local.set $1
  local.get $0
  i32.load offset=16
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  call $~lib/array/Array<u32>#constructor
  local.tee $3
  i32.store
  i32.const 0
  local.set $4
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   local.get $2
   i32.lt_s
   local.set $6
   local.get $6
   if
    local.get $1
    local.get $5
    i32.const 12
    i32.mul
    i32.add
    local.set $7
    local.get $7
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $3
     local.get $4
     local.tee $8
     i32.const 1
     i32.add
     local.set $4
     local.get $8
     local.get $7
     i32.load
     call $~lib/array/Array<u32>#__set
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $3
  local.get $4
  call $~lib/array/Array<u32>#set:length
  local.get $3
  local.set $9
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
 )
)
