(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
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
 (global $assembly/component/ComponentType.map (mut i32) (i32.const 0))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 21148))
 (memory $0 1)
 (data (i32.const 1036) "<")
 (data (i32.const 1048) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1100) "<")
 (data (i32.const 1112) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1228) "<")
 (data (i32.const 1240) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1292) ",")
 (data (i32.const 1304) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1372) "<")
 (data (i32.const 1384) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1436) ",")
 (data (i32.const 1448) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1484) "<")
 (data (i32.const 1496) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1548) ",")
 (data (i32.const 1560) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1596) "\1c")
 (data (i32.const 1628) ",")
 (data (i32.const 1640) "\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y")
 (data (i32.const 1676) "<")
 (data (i32.const 1688) "\01\00\00\00(\00\00\00E\00n\00t\00i\00t\00y\00 \00i\00s\00 \00n\00o\00t\00 \00v\00a\00l\00i\00d\00!")
 (data (i32.const 1740) "<")
 (data (i32.const 1752) "\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00w\00o\00r\00l\00d\00.\00t\00s")
 (data (i32.const 1804) "<")
 (data (i32.const 1816) "\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t")
 (data (i32.const 1868) ",")
 (data (i32.const 1880) "\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s")
 (data (i32.const 1916) "<")
 (data (i32.const 1928) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1980) "|")
 (data (i32.const 1992) "\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 2108) "\1c")
 (data (i32.const 2140) "<")
 (data (i32.const 2152) "\01\00\00\00*\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00a\00r\00c\00h\00e\00t\00y\00p\00e\00.\00t\00s")
 (data (i32.const 2204) ",")
 (data (i32.const 2216) "\01\00\00\00\18\00\00\00e\00l\00e\00m\00e\00n\00t\00I\00n\00d\00e\00x")
 (data (i32.const 2252) "<")
 (data (i32.const 2264) "\01\00\00\00*\00\00\00 \00<\00 \00t\00h\00i\00s\00.\00e\00l\00e\00m\00e\00n\00t\00L\00e\00n\00g\00t\00h")
 (data (i32.const 2316) ",")
 (data (i32.const 2328) "\01\00\00\00\1c\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00t\00r\00u\00t\00h\00!")
 (data (i32.const 2364) ",")
 (data (i32.const 2376) "\10\00\00\00\14\00\00\00\b0\08\00\00\00\00\00\00\e0\08\00\00\00\00\00\00 \t")
 (data (i32.const 2412) "|")
 (data (i32.const 2424) "\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006")
 (data (i32.const 2540) "<")
 (data (i32.const 2552) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s")
 (data (i32.const 2604) "\1c")
 (data (i32.const 2616) "\01\00\00\00\02\00\00\000")
 (data (i32.const 2636) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009")
 (data (i32.const 3036) "\1c\04")
 (data (i32.const 3048) "\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f")
 (data (i32.const 4092) "\\")
 (data (i32.const 4104) "\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z")
 (data (i32.const 4188) "\1c")
 (data (i32.const 4200) "\01")
 (data (i32.const 4220) "<")
 (data (i32.const 4232) "\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00c\00h\00u\00n\00k\00.\00t\00s")
 (data (i32.const 4284) ",")
 (data (i32.const 4296) "\10\00\00\00\14\00\00\00\b0\08\00\00\00\00\00\00\e0\08\00\00\00\00\00\00 \t")
 (data (i32.const 4332) ",")
 (data (i32.const 4344) "\10\00\00\00\14\00\00\00\b0\08\00\00\00\00\00\00\e0\08\00\00\00\00\00\00 \t")
 (data (i32.const 4380) "L")
 (data (i32.const 4392) "\01\00\00\00<\00\00\00E\00n\00t\00i\00t\00y\00 \00d\00o\00e\00s\00n\00\'\00t\00 \00h\00a\00s\00 \00c\00o\00m\00p\00o\00n\00e\00n\00t\00:\00 ")
 (data (i32.const 4460) "\1c")
 (data (i32.const 4472) "\01\00\00\00\06\00\00\00A\00b\00c")
 (data (i32.const 4492) "<")
 (data (i32.const 4504) "\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00d\00e\00x\00.\00t\00s")
 (data (i32.const 4556) "\1c")
 (data (i32.const 4568) "\01\00\00\00\06\00\00\00C\00d\00e")
 (data (i32.const 4588) "\1c")
 (data (i32.const 4600) "\01\00\00\00\06\00\00\00h\00h\00h")
 (data (i32.const 4624) "\11\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 4652) " \00\00\00\00\00\00\00\10A\02")
 (data (i32.const 4676) "\02\t\00\00\00\00\00\00\02\01")
 (data (i32.const 4700) " \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\10\t\12\00\00\00\00\00\10\01\02\00\00\00\00\00\04A\00\00\00\00\00\00\10A\02\00\00\00\00\00 \00\00\00\00\00\00\00\04A")
 (export "add" (func $assembly/index/add))
 (export "Abc#onDispose" (func $assembly/index/Abc#onDispose))
 (export "Abc#dispose" (func $assembly/component/IComponentData#dispose))
 (export "Abc#get:x" (func $assembly/index/Abc#get:x))
 (export "Abc#set:x" (func $~lib/rt/tlsf/Root#set:flMap))
 (export "Abc#constructor" (func $assembly/index/Abc#constructor))
 (export "Cde#onDispose" (func $assembly/index/Abc#onDispose))
 (export "Cde#dispose" (func $assembly/component/IComponentData#dispose))
 (export "Cde#constructor" (func $assembly/index/Abc#constructor))
 (export "Cde#get:c" (func $assembly/index/Abc#get:x))
 (export "Cde#set:c" (func $~lib/rt/tlsf/Root#set:flMap))
 (export "ecsTest" (func $assembly/index/ecsTest))
 (export "memory" (memory $0))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  i32.const 1248
  call $~lib/rt/itcms/__visit
  i32.const 1456
  call $~lib/rt/itcms/__visit
  i32.const 1648
  call $~lib/rt/itcms/__visit
  i32.const 2000
  call $~lib/rt/itcms/__visit
  i32.const 1824
  call $~lib/rt/itcms/__visit
  i32.const 1056
  call $~lib/rt/itcms/__visit
  i32.const 3056
  call $~lib/rt/itcms/__visit
  i32.const 4112
  call $~lib/rt/itcms/__visit
  global.get $assembly/component/ComponentType.map
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1120
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/rt/itcms/iter
  local.get $0
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  block $__inlined_func$~lib/rt/itcms/Object#unlink
   local.get $0
   i32.load offset=4
   i32.const -4
   i32.and
   local.tee $2
   i32.eqz
   if
    i32.const 0
    local.get $0
    i32.const 21148
    i32.lt_u
    local.get $0
    i32.load offset=8
    select
    i32.eqz
    if
     i32.const 0
     i32.const 1120
     i32.const 127
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    br $__inlined_func$~lib/rt/itcms/Object#unlink
   end
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 131
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.store offset=8
   local.get $1
   local.get $1
   i32.load offset=4
   i32.const 3
   i32.and
   local.get $2
   i32.or
   i32.store offset=4
  end
  global.get $~lib/rt/itcms/toSpace
  local.set $2
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   i32.const 4624
   i32.load
   local.get $1
   i32.lt_u
   if
    i32.const 1248
    i32.const 1312
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 4628
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  local.set $3
  local.get $2
  i32.load offset=8
  local.set $1
  local.get $0
  local.get $2
  local.get $3
  i32.or
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $0
  i32.or
  i32.store offset=4
  local.get $2
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/Root#set:flMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   i32.const 31
   local.get $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.set $3
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.get $1
  i32.eq
  if
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $3
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
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
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1392
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $3
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $4
  i32.ne
  if
   i32.const 0
   i32.const 1392
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $5
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $5
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $5
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 377
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1392
    i32.const 384
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1392
    i32.const 397
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
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
  i32.const 21152
  i32.const 0
  i32.store
  i32.const 22720
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 21152
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 21152
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 21152
  i32.const 22724
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 21152
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 21148
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
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.const 1
  local.get $0
  select
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load
   i32.const 1
   i32.and
  end
  if
   i32.const 0
   i32.const 1392
   i32.const 559
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.tee $0
  local.get $0
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  block $folding-inner0
   block $break|0
    block $case2|0
     block $case1|0
      block $case0|0
       global.get $~lib/rt/itcms/state
       br_table $case0|0 $case1|0 $case2|0 $break|0
      end
      i32.const 1
      global.set $~lib/rt/itcms/state
      i32.const 0
      global.set $~lib/rt/itcms/visitCount
      call $~lib/rt/itcms/visitRoots
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/iter
      br $folding-inner0
     end
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.set $1
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|1
      global.get $~lib/rt/itcms/toSpace
      local.get $0
      i32.ne
      if
       local.get $0
       global.set $~lib/rt/itcms/iter
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       local.get $1
       i32.ne
       if
        local.get $0
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        i32.or
        i32.store offset=4
        i32.const 0
        global.set $~lib/rt/itcms/visitCount
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
        br $folding-inner0
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|1
      end
     end
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.set $0
      loop $while-continue|0
       local.get $0
       i32.const 21148
       i32.lt_u
       if
        local.get $0
        i32.load
        call $~lib/rt/itcms/__visit
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      global.get $~lib/rt/itcms/iter
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      loop $while-continue|2
       global.get $~lib/rt/itcms/toSpace
       local.get $0
       i32.ne
       if
        local.get $0
        i32.load offset=4
        i32.const 3
        i32.and
        local.get $1
        i32.ne
        if
         local.get $0
         local.get $1
         local.get $0
         i32.load offset=4
         i32.const -4
         i32.and
         i32.or
         i32.store offset=4
         local.get $0
         i32.const 20
         i32.add
         call $~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        local.set $0
        br $while-continue|2
       end
      end
      global.get $~lib/rt/itcms/fromSpace
      local.set $0
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/fromSpace
      local.get $0
      global.set $~lib/rt/itcms/toSpace
      local.get $1
      global.set $~lib/rt/itcms/white
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      global.set $~lib/rt/itcms/iter
      i32.const 2
      global.set $~lib/rt/itcms/state
     end
     br $folding-inner0
    end
    global.get $~lib/rt/itcms/iter
    local.tee $0
    global.get $~lib/rt/itcms/toSpace
    i32.ne
    if
     local.get $0
     i32.load offset=4
     local.tee $1
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.get $1
     i32.const 3
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1120
      i32.const 228
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     i32.const 21148
     i32.lt_u
     if
      local.get $0
      i32.const 0
      i32.store offset=4
      local.get $0
      i32.const 0
      i32.store offset=8
     else
      global.get $~lib/rt/itcms/total
      local.get $0
      i32.load
      i32.const -4
      i32.and
      i32.const 4
      i32.add
      i32.sub
      global.set $~lib/rt/itcms/total
      local.get $0
      i32.const 4
      i32.add
      call $~lib/rt/tlsf/__free
     end
     i32.const 10
     return
    end
    global.get $~lib/rt/itcms/toSpace
    local.tee $0
    local.tee $1
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $0
    i32.store offset=8
    i32.const 0
    global.set $~lib/rt/itcms/state
   end
   i32.const 0
   return
  end
  global.get $~lib/rt/itcms/visitCount
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    local.get $1
    i32.add
    i32.const 1
    i32.sub
    local.set $1
   end
   local.get $1
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 330
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1392
     i32.const 343
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.tee $3
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1392
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $0
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
  end
  local.tee $0
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   memory.size
   local.tee $2
   local.get $0
   i32.const 536870910
   i32.lt_u
   if (result i32)
    i32.const 1
    i32.const 27
    local.get $0
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    local.get $0
    i32.add
   else
    local.get $0
   end
   i32.const 4
   local.get $3
   i32.load offset=1568
   local.get $2
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   i32.ne
   i32.shl
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $1
   local.get $1
   local.get $2
   i32.lt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $1
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $3
   local.get $2
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $3
   local.get $0
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1392
    i32.const 496
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.load
  i32.const -4
  i32.and
  local.get $0
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 498
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $1
  i32.load
  local.set $2
  local.get $0
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1392
   i32.const 357
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.get $0
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   i32.const 2
   i32.and
   local.get $0
   i32.or
   i32.store
   local.get $0
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $0
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $3
   local.get $0
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $2
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $0
   local.get $0
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
  i32.const 4
  i32.add
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   local.tee $2
   i32.const 1
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 2
   i32.sub
   i32.const 0
   i32.store8
   local.get $2
   i32.const 3
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 4
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   local.tee $1
   i32.const 4
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 12
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 8
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 28
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 20
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 16
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
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
   i32.const 1056
   i32.const 1120
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-loop|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
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
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $2
    local.get $2
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.tee $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $3
  i32.load offset=8
  local.set $1
  local.get $2
  global.get $~lib/rt/itcms/white
  local.get $3
  i32.or
  i32.store offset=4
  local.get $2
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $2
  i32.or
  i32.store offset=4
  local.get $3
  local.get $2
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1120
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $0
    local.get $1
    local.get $2
    select
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    i32.const 0
    local.get $3
    i32.const 3
    i32.eq
    select
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/index/Abc#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 4
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
 )
 (func $assembly/index/Abc#onDispose (param $0 i32)
  nop
 )
 (func $assembly/component/IComponentData#dispose (param $0 i32)
  (local $1 i32)
  block $__inlined_func$assembly/component/IComponentData#onDispose@virtual
   local.get $0
   i32.const 8
   i32.sub
   i32.load
   local.tee $1
   i32.eqz
   br_if $__inlined_func$assembly/component/IComponentData#onDispose@virtual
   local.get $1
   i32.eqz
   br_if $__inlined_func$assembly/component/IComponentData#onDispose@virtual
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/__free
 )
 (func $assembly/index/Abc#get:x (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  loop $while-continue|0
   local.get $1
   i32.const 3
   i32.and
   i32.const 0
   local.get $2
   select
   if
    local.get $0
    local.tee $4
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $4
    local.get $3
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
  i32.eqz
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     local.get $1
     i32.load offset=4
     i32.store offset=4
     local.get $0
     local.get $1
     i32.load offset=8
     i32.store offset=8
     local.get $0
     local.get $1
     i32.load offset=12
     i32.store offset=12
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
    local.get $1
    i32.load offset=4
    i32.store offset=4
    local.get $1
    i32.const 8
    i32.add
    local.set $1
    local.get $0
    i32.const 8
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    local.get $0
    i32.const 4
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $1
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
       i32.const 1
       i32.sub
       br_table $case0|2 $case1|2 $case2|2 $break|2
      end
      local.get $1
      i32.load
      local.set $5
      local.get $0
      local.get $1
      i32.load8_u
      i32.store8
      local.get $0
      local.get $1
      i32.load8_u offset=1
      i32.store8 offset=1
      local.get $0
      i32.const 2
      i32.add
      local.tee $4
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      i32.const 2
      i32.add
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $4
      local.get $3
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
       if
        local.get $0
        local.get $1
        i32.load offset=1
        local.tee $4
        i32.const 8
        i32.shl
        local.get $5
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        local.get $1
        i32.load offset=5
        local.tee $3
        i32.const 8
        i32.shl
        local.get $4
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=4
        local.get $0
        local.get $1
        i32.load offset=9
        local.tee $4
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=8
        local.get $0
        local.get $1
        i32.load offset=13
        local.tee $5
        i32.const 8
        i32.shl
        local.get $4
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=12
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
     local.set $5
     local.get $0
     local.get $1
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $4
     i32.const 2
     i32.add
     local.set $0
     local.get $1
     local.tee $3
     i32.const 2
     i32.add
     local.set $1
     local.get $4
     local.get $3
     i32.load8_u offset=1
     i32.store8 offset=1
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      if
       local.get $0
       local.get $1
       i32.load offset=2
       local.tee $4
       i32.const 16
       i32.shl
       local.get $5
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       local.get $1
       i32.load offset=6
       local.tee $3
       i32.const 16
       i32.shl
       local.get $4
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=4
       local.get $0
       local.get $1
       i32.load offset=10
       local.tee $4
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=8
       local.get $0
       local.get $1
       i32.load offset=14
       local.tee $5
       i32.const 16
       i32.shl
       local.get $4
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=12
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
    local.set $5
    local.get $0
    local.tee $4
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $4
    local.get $3
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
     if
      local.get $0
      local.get $1
      i32.load offset=3
      local.tee $4
      i32.const 24
      i32.shl
      local.get $5
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      local.get $1
      i32.load offset=7
      local.tee $3
      i32.const 24
      i32.shl
      local.get $4
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=4
      local.get $0
      local.get $1
      i32.load offset=11
      local.tee $4
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=8
      local.get $0
      local.get $1
      i32.load offset=15
      local.tee $5
      i32.const 24
      i32.shl
      local.get $4
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=12
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
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $4
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $4
   i32.const 2
   i32.add
   local.tee $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $3
   i32.const 2
   i32.add
   local.set $1
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $4
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $4
   i32.const 2
   i32.add
   local.tee $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.tee $0
   i32.const 2
   i32.add
   local.set $3
   local.get $4
   local.get $0
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $1
   local.get $3
   i32.load8_u
   i32.store8
   local.get $1
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $3
   i32.const 2
   i32.add
   local.set $1
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $4
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $4
   i32.const 2
   i32.add
   local.set $0
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $1
   local.get $0
   i32.sub
   local.get $4
   i32.sub
   i32.const 0
   local.get $4
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $0
    local.get $1
    local.get $4
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/array/Array<i32>#pop (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.lt_s
  if
   i32.const 1648
   i32.const 1568
   i32.const 284
   i32.const 18
   call $~lib/builtins/abort
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
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.const 2
  i32.shr_u
  local.get $1
  i32.lt_u
  if
   local.get $1
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1456
    i32.const 1568
    i32.const 18
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 8
   local.get $1
   i32.const 8
   i32.gt_u
   select
   i32.const 2
   i32.shl
   local.set $1
   block $__inlined_func$~lib/rt/itcms/__renew (result i32)
    local.get $2
    if
     local.get $4
     i32.const 1
     i32.shl
     local.tee $2
     i32.const 1073741820
     local.get $2
     i32.const 1073741820
     i32.lt_u
     select
     local.tee $2
     local.get $1
     local.get $1
     local.get $2
     i32.lt_u
     select
     local.set $1
    end
    local.get $1
    local.tee $2
    local.get $0
    i32.load
    local.tee $6
    local.tee $5
    i32.const 20
    i32.sub
    local.tee $3
    i32.load
    i32.const -4
    i32.and
    i32.const 16
    i32.sub
    i32.le_u
    if
     local.get $3
     local.get $2
     i32.store offset=16
     local.get $5
     br $__inlined_func$~lib/rt/itcms/__renew
    end
    local.get $2
    local.get $3
    i32.load offset=12
    call $~lib/rt/itcms/__new
    local.tee $7
    local.get $5
    local.get $2
    local.get $3
    i32.load offset=16
    local.tee $3
    local.get $2
    local.get $3
    i32.lt_u
    select
    call $~lib/memory/memory.copy
    local.get $7
   end
   local.tee $2
   local.get $4
   i32.add
   local.get $1
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $2
   local.get $6
   i32.ne
   if
    local.get $0
    local.get $2
    i32.store
    local.get $0
    local.get $2
    i32.store offset=4
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $1
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<u32>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=12
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1568
   i32.const 107
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $0
  local.get $0
  i32.const 13
  i32.shr_u
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $0
  local.get $0
  i32.const 16
  i32.shr_u
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $0
    if
     local.get $0
     i32.load offset=8
     local.tee $2
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $1
      local.get $0
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $2
     i32.const -2
     i32.and
     local.set $0
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $0
  end
  local.get $0
  i32.eqz
  if
   i32.const 1824
   i32.const 1888
   i32.const 105
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  local.get $1
  i32.const 1
  i32.add
  local.tee $2
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $6
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $5
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.tee $7
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $7
   i32.ne
   if
    local.get $7
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $7
     i32.load
     local.tee $8
     i32.store
     local.get $2
     local.get $7
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $8
     i32.const -1028477379
     i32.mul
     i32.const 374761397
     i32.add
     i32.const 17
     i32.rotl
     i32.const 668265263
     i32.mul
     local.tee $8
     local.get $8
     i32.const 15
     i32.shr_u
     i32.xor
     i32.const -2048144777
     i32.mul
     local.tee $8
     local.get $8
     i32.const 13
     i32.shr_u
     i32.xor
     i32.const -1028477379
     i32.mul
     local.tee $8
     local.get $8
     i32.const 16
     i32.shr_u
     i32.xor
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     local.get $6
     i32.add
     local.tee $8
     i32.load
     i32.store offset=8
     local.get $8
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $7
    i32.const 12
    i32.add
    local.set $7
    br $while-continue|0
   end
  end
  local.get $0
  local.get $6
  i32.store
  local.get $0
  local.get $6
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $3
  i32.store offset=8
  local.get $0
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $5
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<u32>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.get $1
  i32.le_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 1248
    i32.const 1568
    i32.const 123
    i32.const 22
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   call $~lib/array/ensureCapacity
   local.get $0
   local.get $3
   i32.store offset=12
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1936
   i32.const 130
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.get $2
  i32.store
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<i32,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  local.get $1
  i32.const 1
  i32.add
  local.tee $2
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $6
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $5
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.tee $7
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $7
   i32.ne
   if
    local.get $7
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $7
     i32.load
     local.tee $8
     i32.store
     local.get $2
     local.get $7
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $8
     i32.const -1028477379
     i32.mul
     i32.const 374761397
     i32.add
     i32.const 17
     i32.rotl
     i32.const 668265263
     i32.mul
     local.tee $8
     local.get $8
     i32.const 15
     i32.shr_u
     i32.xor
     i32.const -2048144777
     i32.mul
     local.tee $8
     local.get $8
     i32.const 13
     i32.shr_u
     i32.xor
     i32.const -1028477379
     i32.mul
     local.tee $8
     local.get $8
     i32.const 16
     i32.shr_u
     i32.xor
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     local.get $6
     i32.add
     local.tee $8
     i32.load
     i32.store offset=8
     local.get $8
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $7
    i32.const 12
    i32.add
    local.set $7
    br $while-continue|0
   end
  end
  local.get $0
  local.get $6
  i32.store
  local.get $0
  local.get $6
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $3
  i32.store offset=8
  local.get $0
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $5
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/map/Map<i32,i32>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $0
  local.get $0
  i32.const 13
  i32.shr_u
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $0
  local.get $0
  i32.const 16
  i32.shr_u
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  block $__inlined_func$~lib/map/Map<i32,i32>#find
   loop $while-continue|0
    local.get $0
    if
     local.get $0
     i32.load offset=8
     local.tee $2
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $1
      local.get $0
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<i32,i32>#find
     local.get $2
     i32.const -2
     i32.and
     local.set $0
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $0
  end
  local.get $0
  i32.eqz
  if
   i32.const 1824
   i32.const 1888
   i32.const 105
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
 )
 (func $~lib/array/Array<i32>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=12
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1568
   i32.const 107
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/number/I32#toString (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/util/number/itoa32
   local.get $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 2624
    local.set $1
    br $__inlined_func$~lib/util/number/itoa32
   end
   i32.const 0
   local.get $0
   i32.sub
   local.get $0
   local.get $0
   i32.const 31
   i32.shr_u
   local.tee $3
   select
   local.tee $0
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.const 100000
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 100
    i32.lt_u
    if (result i32)
     local.get $1
     i32.const 10
     i32.ge_u
     i32.const 1
     i32.add
    else
     local.get $1
     i32.const 10000
     i32.ge_u
     i32.const 3
     i32.add
     local.get $1
     i32.const 1000
     i32.ge_u
     i32.add
    end
   else
    local.get $1
    i32.const 10000000
    i32.lt_u
    if (result i32)
     local.get $1
     i32.const 1000000
     i32.ge_u
     i32.const 6
     i32.add
    else
     local.get $1
     i32.const 1000000000
     i32.ge_u
     i32.const 8
     i32.add
     local.get $1
     i32.const 100000000
     i32.ge_u
     i32.add
    end
   end
   local.get $3
   i32.add
   local.tee $2
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   loop $while-continue|0
    local.get $0
    i32.const 10000
    i32.ge_u
    if
     local.get $0
     i32.const 10000
     i32.rem_u
     local.set $4
     local.get $0
     i32.const 10000
     i32.div_u
     local.set $0
     local.get $2
     i32.const 4
     i32.sub
     local.tee $2
     i32.const 1
     i32.shl
     local.get $1
     i32.add
     local.get $4
     i32.const 100
     i32.div_u
     i32.const 2
     i32.shl
     i32.const 2636
     i32.add
     i64.load32_u
     local.get $4
     i32.const 100
     i32.rem_u
     i32.const 2
     i32.shl
     i32.const 2636
     i32.add
     i64.load32_u
     i64.const 32
     i64.shl
     i64.or
     i64.store
     br $while-continue|0
    end
   end
   local.get $0
   i32.const 100
   i32.ge_u
   if
    local.get $2
    i32.const 2
    i32.sub
    local.tee $2
    i32.const 1
    i32.shl
    local.get $1
    i32.add
    local.get $0
    i32.const 100
    i32.rem_u
    i32.const 2
    i32.shl
    i32.const 2636
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 100
    i32.div_u
    local.set $0
   end
   local.get $0
   i32.const 10
   i32.ge_u
   if
    local.get $2
    i32.const 2
    i32.sub
    i32.const 1
    i32.shl
    local.get $1
    i32.add
    local.get $0
    i32.const 2
    i32.shl
    i32.const 2636
    i32.add
    i32.load
    i32.store
   else
    local.get $2
    i32.const 1
    i32.sub
    i32.const 1
    i32.shl
    local.get $1
    i32.add
    local.get $0
    i32.const 48
    i32.add
    i32.store16
   end
   local.get $3
   if
    local.get $1
    i32.const 45
    i32.store16
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $1
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#join (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $5
  i64.const 0
  i64.store
  local.get $5
  i32.const 0
  i32.store offset=8
  block $__inlined_func$~lib/util/string/joinStringArray
   local.get $3
   i32.const 1
   i32.sub
   local.tee $5
   i32.const 0
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 4208
    local.set $3
    br $__inlined_func$~lib/util/string/joinStringArray
   end
   local.get $5
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $3
    local.get $0
    i32.load
    local.tee $0
    i32.store
    local.get $3
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    i32.const 4208
    local.get $0
    select
    local.set $3
    br $__inlined_func$~lib/util/string/joinStringArray
   end
   loop $for-loop|0
    local.get $3
    local.get $4
    i32.gt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.const 2
     i32.shl
     local.get $0
     i32.add
     i32.load
     local.tee $6
     i32.store offset=4
     local.get $6
     if
      local.get $6
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.const 1
      i32.shr_u
      local.get $2
      i32.add
      local.set $2
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.const 4204
   i32.load
   i32.const 1
   i32.shr_u
   local.tee $6
   i32.mul
   local.get $2
   i32.add
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=8
   i32.const 0
   local.set $4
   loop $for-loop|1
    local.get $4
    local.get $5
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.const 2
     i32.shl
     local.get $0
     i32.add
     i32.load
     local.tee $2
     i32.store offset=4
     local.get $2
     if
      local.get $1
      i32.const 1
      i32.shl
      local.get $3
      i32.add
      local.get $2
      local.get $2
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.const 1
      i32.shr_u
      local.tee $2
      i32.const 1
      i32.shl
      call $~lib/memory/memory.copy
      local.get $1
      local.get $2
      i32.add
      local.set $1
     end
     local.get $6
     if
      local.get $1
      i32.const 1
      i32.shl
      local.get $3
      i32.add
      i32.const 4208
      local.get $6
      i32.const 1
      i32.shl
      call $~lib/memory/memory.copy
      local.get $1
      local.get $6
      i32.add
      local.set $1
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $for-loop|1
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $5
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load
   local.tee $0
   i32.store offset=4
   local.get $0
   if
    local.get $1
    i32.const 1
    i32.shl
    local.get $3
    i32.add
    local.get $0
    local.get $0
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.const 1
    i32.shl
    call $~lib/memory/memory.copy
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $3
 )
 (func $~lib/string/String.__concat (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/string/String#concat
   i32.const 4396
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $2
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   i32.add
   local.tee $1
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 4208
    local.set $1
    br $__inlined_func$~lib/string/String#concat
   end
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   local.get $1
   i32.const 4400
   local.get $2
   call $~lib/memory/memory.copy
   local.get $1
   local.get $2
   i32.add
   local.get $0
   local.get $3
   call $~lib/memory/memory.copy
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $1
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>~visit (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  local.get $0
  i32.load offset=8
  local.tee $1
  local.tee $0
  i32.add
  local.set $2
  loop $while-continue|0
   local.get $0
   local.get $2
   i32.lt_u
   if
    local.get $0
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $0
     i32.load offset=4
     call $~lib/rt/itcms/__visit
    end
    local.get $0
    i32.const 12
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $1
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>~visit (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  local.get $0
  i32.add
  local.set $1
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $0
    i32.load
    local.tee $2
    if
     local.get $2
     call $~lib/rt/itcms/__visit
    end
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner0
   block $invalid
    block $~lib/staticarray/StaticArray<~lib/string/String>
     block $assembly/entity/Entity
      block $~lib/map/Map<u32,assembly/archetype/Archetype>
       block $~lib/staticarray/StaticArray<assembly/component/ComponentType>
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
                   br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $assembly/component/ComponentType $~lib/map/Map<u32,assembly/component/ComponentType> $assembly/world/World $~lib/array/Array<i32> $~lib/array/Array<u32> $assembly/archetype/Archetype $assembly/chunk/Chunk $~lib/array/Array<assembly/chunk/Chunk> $folding-inner0 $folding-inner0 $~lib/staticarray/StaticArray<assembly/component/ComponentType> $~lib/map/Map<u32,assembly/archetype/Archetype> $assembly/entity/Entity $~lib/staticarray/StaticArray<~lib/string/String> $invalid
                  end
                  return
                 end
                 return
                end
                local.get $0
                i32.load
                local.tee $0
                if
                 local.get $0
                 call $~lib/rt/itcms/__visit
                end
                return
               end
               return
              end
              local.get $0
              call $~lib/map/Map<u32,assembly/component/ComponentType>~visit
              return
             end
             local.get $0
             local.tee $1
             i32.load
             local.tee $0
             if
              local.get $0
              call $~lib/rt/itcms/__visit
             end
             local.get $1
             i32.load offset=8
             local.tee $0
             if
              local.get $0
              call $~lib/rt/itcms/__visit
             end
             local.get $1
             i32.load offset=12
             local.tee $0
             if
              local.get $0
              call $~lib/rt/itcms/__visit
             end
             local.get $1
             i32.load offset=16
             local.tee $0
             if
              local.get $0
              call $~lib/rt/itcms/__visit
             end
             local.get $1
             i32.load offset=20
             local.tee $1
             if
              local.get $1
              call $~lib/rt/itcms/__visit
             end
             return
            end
            local.get $0
            i32.load
            call $~lib/rt/itcms/__visit
            return
           end
           local.get $0
           i32.load
           call $~lib/rt/itcms/__visit
           return
          end
          local.get $0
          local.tee $1
          i32.load offset=8
          local.tee $0
          if
           local.get $0
           call $~lib/rt/itcms/__visit
          end
          local.get $1
          i32.load offset=12
          local.tee $0
          if
           local.get $0
           call $~lib/rt/itcms/__visit
          end
          local.get $1
          i32.load offset=16
          local.tee $0
          if
           local.get $0
           call $~lib/rt/itcms/__visit
          end
          local.get $1
          i32.load offset=20
          local.tee $0
          if
           local.get $0
           call $~lib/rt/itcms/__visit
          end
          local.get $1
          i32.load offset=24
          local.tee $1
          if
           local.get $1
           call $~lib/rt/itcms/__visit
          end
          return
         end
         return
        end
        local.get $0
        local.tee $1
        i32.load offset=4
        local.tee $2
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
         if
          local.get $2
          i32.load
          local.tee $0
          if
           local.get $0
           call $~lib/rt/itcms/__visit
          end
          local.get $2
          i32.const 4
          i32.add
          local.set $2
          br $while-continue|0
         end
        end
        local.get $1
        i32.load
        call $~lib/rt/itcms/__visit
        return
       end
       local.get $0
       call $~lib/staticarray/StaticArray<assembly/component/ComponentType>~visit
       return
      end
      local.get $0
      call $~lib/map/Map<u32,assembly/component/ComponentType>~visit
      return
     end
     return
    end
    local.get $0
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>~visit
    return
   end
   unreachable
  end
  local.get $0
  i32.load
  call $~lib/rt/itcms/__visit
  local.get $0
  i32.load offset=8
  call $~lib/rt/itcms/__visit
 )
 (func $~start
  (local $0 i32)
  (local $1 i32)
  memory.size
  i32.const 16
  i32.shl
  i32.const 21148
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1172
  i32.const 1168
  i32.store
  i32.const 1176
  i32.const 1168
  i32.store
  i32.const 1168
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1204
  i32.const 1200
  i32.store
  i32.const 1208
  i32.const 1200
  i32.store
  i32.const 1200
  global.set $~lib/rt/itcms/toSpace
  i32.const 1348
  i32.const 1344
  i32.store
  i32.const 1352
  i32.const 1344
  i32.store
  i32.const 1344
  global.set $~lib/rt/itcms/fromSpace
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 24
  i32.const 4
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
  global.set $assembly/component/ComponentType.map
 )
 (func $assembly/component/ComponentType.Get<assembly/index/Abc> (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  global.get $assembly/component/ComponentType.map
  local.tee $0
  i32.store
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.const 148298089
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $0
    if
     local.get $0
     i32.load offset=8
     local.tee $1
     i32.const 1
     i32.and
     if (result i32)
      i32.const 1
     else
      local.get $0
      i32.load
     end
     i32.eqz
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $1
     i32.const -2
     i32.and
     local.set $0
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $0
  end
  local.get $0
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   global.get $assembly/component/ComponentType.map
   local.tee $1
   i32.store
   local.get $0
   local.get $1
   i32.const 0
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $0
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  call $assembly/component/ComponentType#constructor
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/component/ComponentType.map
  local.tee $1
  i32.store
  local.get $1
  i32.const 0
  local.get $0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/archetype/Archetype#constructor (param $0 i32) (result i32)
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
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 4764
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   i64.const 0
   i64.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 32
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   local.get $0
   i32.store offset=24
   local.get $3
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $3
   i32.const 128
   i32.store offset=28
   local.get $3
   i32.const 0
   i32.store
   local.get $3
   i32.const 0
   i32.store offset=4
   local.get $3
   i32.const 0
   i32.store offset=8
   local.get $3
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $3
   i32.const 0
   i32.const 6
   i32.const 2128
   call $~lib/rt/__newArray
   local.tee $1
   i32.store offset=12
   local.get $3
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4764
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   i32.const 16
   call $~lib/arraybuffer/ArrayBuffer#constructor
   local.tee $1
   i32.store
   local.get $2
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $2
   i32.const 3
   i32.store offset=4
   local.get $2
   i32.const 48
   call $~lib/arraybuffer/ArrayBuffer#constructor
   local.tee $1
   i32.store offset=8
   local.get $2
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $2
   i32.const 4
   i32.store offset=12
   local.get $2
   i32.const 0
   i32.store offset=16
   local.get $2
   i32.const 0
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   local.get $2
   i32.store offset=16
   local.get $3
   local.get $2
   i32.const 0
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4764
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.const 12
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   i32.const 16
   call $~lib/arraybuffer/ArrayBuffer#constructor
   local.tee $1
   i32.store
   local.get $2
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $2
   i32.const 3
   i32.store offset=4
   local.get $2
   i32.const 48
   call $~lib/arraybuffer/ArrayBuffer#constructor
   local.tee $1
   i32.store offset=8
   local.get $2
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $2
   i32.const 4
   i32.store offset=12
   local.get $2
   i32.const 0
   i32.store offset=16
   local.get $2
   i32.const 0
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   local.get $2
   i32.store offset=20
   local.get $3
   local.get $2
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   local.set $10
   loop $for-loop|0
    local.get $7
    local.get $10
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $7
     call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
     local.tee $8
     i32.store offset=4
     i32.const 1
     local.get $8
     i32.load offset=8
     i32.shl
     local.get $9
     i32.or
     local.set $9
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.load offset=20
     local.tee $4
     i32.store offset=8
     local.get $8
     i32.load offset=8
     local.set $2
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 4764
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     i32.store
     local.get $4
     i32.load
     local.get $2
     i32.const -1028477379
     i32.mul
     i32.const 374761397
     i32.add
     i32.const 17
     i32.rotl
     i32.const 668265263
     i32.mul
     local.tee $1
     local.get $1
     i32.const 15
     i32.shr_u
     i32.xor
     i32.const -2048144777
     i32.mul
     local.tee $1
     local.get $1
     i32.const 13
     i32.shr_u
     i32.xor
     i32.const -1028477379
     i32.mul
     local.tee $1
     local.get $1
     i32.const 16
     i32.shr_u
     i32.xor
     local.tee $11
     local.get $4
     i32.load offset=4
     i32.and
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.set $1
     block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
      loop $while-continue|0
       local.get $1
       if
        local.get $1
        i32.load offset=8
        local.tee $5
        i32.const 1
        i32.and
        if (result i32)
         i32.const 0
        else
         local.get $2
         local.get $1
         i32.load
         i32.eq
        end
        br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
        local.get $5
        i32.const -2
        i32.and
        local.set $1
        br $while-continue|0
       end
      end
      i32.const 0
      local.set $1
     end
     local.get $1
     if
      local.get $1
      local.get $6
      i32.store offset=4
     else
      local.get $4
      i32.load offset=16
      local.get $4
      i32.load offset=12
      i32.eq
      if
       local.get $4
       local.get $4
       i32.load offset=20
       local.get $4
       i32.load offset=12
       i32.const 3
       i32.mul
       i32.const 4
       i32.div_s
       i32.lt_s
       if (result i32)
        local.get $4
        i32.load offset=4
       else
        local.get $4
        i32.load offset=4
        i32.const 1
        i32.shl
        i32.const 1
        i32.or
       end
       call $~lib/map/Map<u32,assembly/component/ComponentType>#rehash
      end
      global.get $~lib/memory/__stack_pointer
      local.get $4
      i32.load offset=8
      local.tee $5
      i32.store
      local.get $4
      local.get $4
      i32.load offset=16
      local.tee $1
      i32.const 1
      i32.add
      i32.store offset=16
      local.get $1
      i32.const 12
      i32.mul
      local.get $5
      i32.add
      local.tee $5
      local.get $2
      i32.store
      local.get $5
      local.get $6
      i32.store offset=4
      local.get $4
      local.get $4
      i32.load offset=20
      i32.const 1
      i32.add
      i32.store offset=20
      local.get $5
      local.get $4
      i32.load
      local.get $4
      i32.load offset=4
      local.get $11
      i32.and
      i32.const 2
      i32.shl
      i32.add
      local.tee $1
      i32.load
      i32.store offset=8
      local.get $1
      local.get $5
      i32.store
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $8
     i32.load
     local.get $6
     i32.add
     local.set $6
     local.get $7
     i32.const 1
     i32.add
     local.set $7
     br $for-loop|0
    end
   end
   local.get $3
   local.get $9
   i32.store
   local.get $3
   local.get $6
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 1
   i32.const 10
   i32.const 0
   call $~lib/rt/__newArray
   local.tee $1
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=4
   i32.store offset=16
   local.get $6
   i32.const 128
   call $assembly/chunk/Chunk#constructor
   local.set $0
   local.get $1
   i32.load offset=4
   local.get $0
   i32.store
   local.get $1
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $3
   local.get $1
   i32.store offset=8
   local.get $3
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 21168
  i32.const 21216
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/archetype/Archetype#addEntity (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  local.get $0
  i32.load offset=12
  local.tee $3
  i32.store
  local.get $3
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $3
  local.get $2
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.store
  local.get $1
  i32.load
  local.set $4
  local.get $2
  local.get $2
  i32.load offset=12
  local.tee $5
  i32.const 1
  i32.add
  local.tee $6
  i32.const 1
  call $~lib/array/ensureCapacity
  local.get $2
  i32.load offset=4
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.get $4
  i32.store
  local.get $2
  local.get $6
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=16
  local.tee $2
  i32.store
  local.get $2
  local.get $1
  i32.load
  local.get $3
  call $~lib/map/Map<i32,i32>#set
  local.get $3
  local.get $0
  i32.load offset=28
  i32.div_s
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.tee $2
  i32.store
  local.get $2
  i32.load offset=12
  local.get $1
  i32.le_s
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.store
   local.get $0
   i32.load offset=4
   local.get $0
   i32.load offset=28
   call $assembly/chunk/Chunk#constructor
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $1
   i32.load offset=12
   local.tee $2
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   call $~lib/array/ensureCapacity
   local.get $1
   i32.load offset=4
   local.get $2
   i32.const 2
   i32.shl
   i32.add
   local.get $0
   i32.store
   local.get $1
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $1
   local.get $3
   i32.store offset=12
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/archetype/Archetype#transferAndRemoveEntity (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store
  local.get $3
  i64.const 0
  i64.store offset=8
  local.get $3
  i64.const 0
  i64.store offset=16
  local.get $3
  i64.const 0
  i64.store offset=24
  local.get $3
  local.get $0
  i32.load offset=16
  local.tee $3
  i32.store
  local.get $2
  i32.load
  local.tee $4
  local.set $5
  local.get $3
  i32.load
  local.get $3
  i32.load offset=4
  local.get $4
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $3
  i32.const 15
  i32.shr_u
  local.get $3
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $3
  i32.const 13
  i32.shr_u
  local.get $3
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $3
  i32.const 16
  i32.shr_u
  local.get $3
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $3
  block $__inlined_func$~lib/map/Map<i32,i32>#find
   loop $while-continue|0
    local.get $3
    if
     local.get $3
     i32.load offset=8
     local.tee $6
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $5
      local.get $3
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<i32,i32>#find
     local.get $6
     i32.const -2
     i32.and
     local.set $3
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $3
  end
  local.get $3
  i32.eqz
  if
   i32.const 0
   i32.const 2160
   i32.const 81
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=16
  local.tee $3
  i32.store
  local.get $3
  local.get $2
  i32.load
  call $~lib/map/Map<i32,i32>#get
  local.tee $3
  local.get $0
  i32.load offset=28
  local.tee $4
  i32.div_s
  local.set $8
  local.get $3
  local.get $4
  i32.rem_s
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $6
  i32.store offset=4
  i32.const -1
  local.set $4
  block $assembly/utility/fastRemove<i32>|inlined.0
   local.get $5
   local.tee $3
   i32.eqz
   br_if $assembly/utility/fastRemove<i32>|inlined.0
   i32.const 1
   local.get $6
   i32.load offset=12
   i32.const 1
   i32.sub
   local.tee $4
   local.get $3
   i32.eq
   local.get $3
   i32.const 1
   i32.eq
   select
   if
    local.get $6
    call $~lib/array/Array<i32>#pop
    drop
    local.get $3
    local.set $4
    br $assembly/utility/fastRemove<i32>|inlined.0
   end
   local.get $6
   local.get $3
   local.get $6
   local.get $4
   call $~lib/array/Array<i32>#__get
   call $~lib/array/Array<u32>#__set
   local.get $6
   local.get $6
   i32.load offset=12
   i32.const 1
   i32.sub
   local.tee $7
   i32.const 0
   call $~lib/array/ensureCapacity
   local.get $6
   local.get $7
   i32.store offset=12
  end
  local.get $4
  i32.const -1
  i32.le_s
  if
   i32.const 0
   i32.const 2160
   i32.const 87
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=16
  local.tee $6
  i32.store
  local.get $2
  i32.load
  local.tee $2
  local.set $7
  local.get $6
  i32.load
  local.get $6
  i32.load offset=4
  local.get $2
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $2
  i32.const 15
  i32.shr_u
  local.get $2
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $2
  i32.const 13
  i32.shr_u
  local.get $2
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $2
  i32.const 16
  i32.shr_u
  local.get $2
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  block $__inlined_func$~lib/map/Map<i32,i32>#find0
   loop $while-continue|01
    local.get $2
    if
     local.get $2
     i32.load offset=8
     local.tee $9
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $7
      local.get $2
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<i32,i32>#find0
     local.get $9
     i32.const -2
     i32.and
     local.set $2
     br $while-continue|01
    end
   end
   i32.const 0
   local.set $2
  end
  local.get $2
  if
   local.get $2
   local.get $2
   i32.load offset=8
   i32.const 1
   i32.or
   i32.store offset=8
   local.get $6
   local.get $6
   i32.load offset=20
   i32.const 1
   i32.sub
   i32.store offset=20
   local.get $6
   i32.load offset=4
   i32.const 1
   i32.shr_u
   local.tee $7
   i32.const 1
   i32.add
   i32.const 4
   local.get $6
   i32.load offset=20
   local.tee $2
   local.get $2
   i32.const 4
   i32.lt_u
   select
   i32.ge_u
   if (result i32)
    local.get $6
    i32.load offset=20
    local.get $6
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
   else
    i32.const 0
   end
   if
    local.get $6
    local.get $7
    call $~lib/map/Map<i32,i32>#rehash
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $0
  i32.load offset=8
  local.tee $6
  i32.store
  local.get $2
  local.get $6
  local.get $8
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $2
  i32.store offset=4
  local.get $3
  local.get $2
  i32.load offset=12
  i32.ge_s
  if
   global.get $~lib/memory/__stack_pointer
   local.get $3
   call $~lib/number/I32#toString
   local.tee $0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.load offset=12
   call $~lib/number/I32#toString
   local.tee $1
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 2384
   i32.store
   i32.const 2388
   local.get $0
   i32.store
   i32.const 2384
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 2384
   i32.store
   i32.const 2396
   local.get $1
   i32.store
   i32.const 2384
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 2384
   i32.store
   local.get $0
   i32.const 4208
   i32.store offset=16
   i32.const 2384
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 4240
   i32.const 26
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.load
  local.get $2
  i32.load offset=8
  local.get $3
  i32.mul
  i32.add
  local.set $6
  local.get $4
  local.get $2
  i32.load offset=12
  i32.ge_s
  if
   global.get $~lib/memory/__stack_pointer
   local.get $4
   call $~lib/number/I32#toString
   local.tee $0
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.load offset=12
   call $~lib/number/I32#toString
   local.tee $1
   i32.store offset=24
   global.get $~lib/memory/__stack_pointer
   i32.const 4304
   i32.store
   i32.const 4308
   local.get $0
   i32.store
   i32.const 4304
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 4304
   i32.store
   i32.const 4316
   local.get $1
   i32.store
   i32.const 4304
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 4304
   i32.store
   local.get $0
   i32.const 4208
   i32.store offset=16
   i32.const 4304
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 4240
   i32.const 26
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.load
  local.get $2
  i32.load offset=8
  local.get $4
  i32.mul
  i32.add
  local.set $3
  local.get $4
  local.get $5
  i32.ne
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $5
   local.get $0
   i32.load offset=16
   local.tee $7
   i32.store
   local.get $5
   local.get $0
   i32.load offset=12
   local.tee $5
   i32.store offset=16
   local.get $7
   local.get $5
   local.get $4
   call $~lib/array/Array<i32>#__get
   local.get $4
   call $~lib/map/Map<i32,i32>#set
   local.get $6
   local.get $3
   local.get $2
   i32.load offset=8
   call $~lib/memory/memory.copy
  end
  local.get $3
  local.get $2
  i32.load offset=12
  call $~lib/memory/memory.fill
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $0
  i32.load offset=20
  local.tee $6
  i32.store offset=8
  local.get $2
  local.get $1
  i32.load offset=20
  local.tee $3
  i32.store offset=24
  i32.const 0
  local.set $1
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $2
   i32.store
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   local.get $1
   i32.gt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    local.get $0
    i32.load offset=24
    local.tee $4
    i32.store
    local.get $2
    local.get $4
    local.get $1
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
    local.tee $4
    i32.store offset=28
    local.get $3
    i32.load
    local.get $3
    i32.load offset=4
    local.get $4
    i32.load offset=8
    local.tee $7
    i32.const -1028477379
    i32.mul
    i32.const 374761397
    i32.add
    i32.const 17
    i32.rotl
    i32.const 668265263
    i32.mul
    local.tee $2
    i32.const 15
    i32.shr_u
    local.get $2
    i32.xor
    i32.const -2048144777
    i32.mul
    local.tee $2
    i32.const 13
    i32.shr_u
    local.get $2
    i32.xor
    i32.const -1028477379
    i32.mul
    local.tee $2
    i32.const 16
    i32.shr_u
    local.get $2
    i32.xor
    i32.and
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.set $2
    block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     loop $while-continue|00
      local.get $2
      if
       local.get $2
       i32.load offset=8
       local.tee $8
       i32.const 1
       i32.and
       if (result i32)
        i32.const 0
       else
        local.get $7
        local.get $2
        i32.load
        i32.eq
       end
       br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
       local.get $8
       i32.const -2
       i32.and
       local.set $2
       br $while-continue|00
      end
     end
     i32.const 0
     local.set $2
    end
    local.get $2
    if
     local.get $3
     local.get $4
     i32.load offset=8
     call $~lib/map/Map<u32,assembly/component/ComponentType>#get
     drop
     local.get $6
     local.get $4
     i32.load offset=8
     call $~lib/map/Map<u32,assembly/component/ComponentType>#get
     drop
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 32
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
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store
  local.get $3
  i64.const 0
  i64.store offset=8
  local.get $3
  i64.const 0
  i64.store offset=16
  local.get $3
  i32.const 0
  i32.store offset=24
  local.get $2
  i32.load offset=8
  local.set $5
  local.get $3
  local.get $0
  i32.load offset=12
  local.tee $3
  i32.store
  local.get $3
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $6
  i32.store offset=4
  local.get $6
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  local.get $5
  i32.shl
  local.get $3
  i32.or
  call $~lib/array/Array<u32>#__set
  local.get $6
  local.get $4
  call $~lib/array/Array<u32>#__get
  local.set $6
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.tee $4
  i32.store
  local.get $4
  i32.load
  local.get $4
  i32.load offset=4
  local.get $3
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $4
  i32.const 15
  i32.shr_u
  local.get $4
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $4
  i32.const 13
  i32.shr_u
  local.get $4
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $4
  i32.const 16
  i32.shr_u
  local.get $4
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $4
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $4
    if
     local.get $4
     i32.load offset=8
     local.tee $8
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $3
      local.get $4
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $8
     i32.const -2
     i32.and
     local.set $4
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $4
  end
  local.get $4
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $5
   local.get $0
   i32.load offset=20
   local.tee $4
   i32.store
   local.get $5
   local.get $4
   local.get $3
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $5
   i32.store offset=8
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.tee $3
  i32.store
  local.get $3
  i32.load
  local.get $3
  i32.load offset=4
  local.get $6
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $3
  i32.const 15
  i32.shr_u
  local.get $3
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $3
  i32.const 13
  i32.shr_u
  local.get $3
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $3
  i32.const 16
  i32.shr_u
  local.get $3
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $3
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find1
   loop $while-continue|02
    local.get $3
    if
     local.get $3
     i32.load offset=8
     local.tee $4
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $6
      local.get $3
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find1
     local.get $4
     i32.const -2
     i32.and
     local.set $3
     br $while-continue|02
    end
   end
   i32.const 0
   local.set $3
  end
  local.get $3
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $0
   i32.load offset=20
   local.tee $0
   i32.store
   local.get $2
   local.get $0
   local.get $6
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $2
   i32.store offset=12
  else
   local.get $5
   if
    global.get $~lib/memory/__stack_pointer
    local.tee $3
    local.get $5
    i32.load offset=24
    local.tee $4
    i32.store
    local.get $3
    local.get $4
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 2
    i32.shr_u
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
    local.tee $3
    i32.store offset=16
    loop $for-loop|0
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.load offset=24
     local.tee $4
     i32.store
     local.get $4
     i32.const 20
     i32.sub
     i32.load offset=16
     i32.const 2
     i32.shr_u
     local.get $7
     i32.gt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $5
      i32.load offset=24
      local.tee $4
      i32.store offset=24
      local.get $4
      local.get $7
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $4
      i32.store offset=20
      local.get $3
      local.get $7
      local.get $4
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
      local.get $7
      i32.const 1
      i32.add
      local.set $7
      br $for-loop|0
     end
    end
   else
    global.get $~lib/memory/__stack_pointer
    i32.const 1
    call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
    local.tee $3
    i32.store offset=16
   end
   local.get $3
   local.get $3
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   i32.const 1
   i32.sub
   local.get $2
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $3
   call $assembly/archetype/Archetype#constructor
   local.tee $2
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=20
   local.tee $0
   i32.store
   local.get $0
   local.get $6
   local.get $2
   call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  end
  local.get $2
  local.get $1
  call $assembly/archetype/Archetype#addEntity
  local.get $5
  if
   local.get $5
   local.get $2
   local.get $1
   call $assembly/archetype/Archetype#transferAndRemoveEntity
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/archetype/Archetype#getDataViewPtr (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store
  local.get $3
  i64.const 0
  i64.store offset=8
  local.get $3
  i32.const 0
  i32.store offset=16
  local.get $3
  local.get $0
  i32.load offset=16
  local.tee $3
  i32.store
  local.get $3
  local.get $1
  i32.load
  call $~lib/map/Map<i32,i32>#get
  local.tee $1
  local.get $0
  i32.load offset=28
  local.tee $3
  i32.div_s
  local.set $4
  local.get $1
  local.get $3
  i32.rem_s
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $4
  call $~lib/array/Array<assembly/chunk/Chunk>#__get
  local.tee $0
  i32.store offset=4
  local.get $2
  i32.load
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_s
  if
   global.get $~lib/memory/__stack_pointer
   local.get $1
   call $~lib/number/I32#toString
   local.tee $1
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=12
   call $~lib/number/I32#toString
   local.tee $0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 4352
   i32.store
   i32.const 4356
   local.get $1
   i32.store
   i32.const 4352
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 4352
   i32.store
   i32.const 4364
   local.get $0
   i32.store
   i32.const 4352
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 4352
   i32.store
   local.get $0
   i32.const 4208
   i32.store offset=16
   i32.const 4352
   call $~lib/staticarray/StaticArray<~lib/string/String>#join
   i32.const 4240
   i32.const 14
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=8
  local.get $1
  i32.mul
  i32.add
  i32.add
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/world/World#getComponent<assembly/index/Abc> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $1
  if (result i32)
   local.get $1
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load
   local.get $0
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load offset=4
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $3
   i32.store
   local.get $3
   local.get $1
   i32.load
   call $~lib/array/Array<u32>#__get
   local.get $2
   i32.eq
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1696
   i32.const 1760
   i32.const 49
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.store
  local.get $2
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  i32.const 1
  i32.and
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 4400
   i32.store
   local.get $0
   i32.const 4480
   i32.store offset=4
   i32.const 4480
   call $~lib/string/String.__concat
   i32.const 1760
   i32.const 125
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.store
  local.get $2
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=20
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $2
  call $~lib/map/Map<u32,assembly/component/ComponentType>#get
  local.tee $0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/index/Abc>
  local.tee $2
  i32.store offset=12
  local.get $0
  local.get $1
  local.get $2
  call $assembly/archetype/Archetype#getDataViewPtr
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/component/ComponentType.Get<assembly/index/Cde> (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  global.get $assembly/component/ComponentType.map
  local.tee $0
  i32.store
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.const -205818221
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $0
    if
     local.get $0
     i32.load offset=8
     local.tee $1
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $0
      i32.load
      i32.const 1
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $1
     i32.const -2
     i32.and
     local.set $0
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $0
  end
  local.get $0
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   global.get $assembly/component/ComponentType.map
   local.tee $1
   i32.store
   local.get $0
   local.get $1
   i32.const 1
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $0
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  call $assembly/component/ComponentType#constructor
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/component/ComponentType.map
  local.tee $1
  i32.store
  local.get $1
  i32.const 1
  local.get $0
  call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/world/World#removeComponent<assembly/index/Cde> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i64.const 0
  i64.store offset=8
  local.get $2
  i64.const 0
  i64.store offset=16
  local.get $2
  i64.const 0
  i64.store offset=24
  local.get $0
  local.set $3
  local.get $1
  if (result i32)
   local.get $1
   i32.load
   i32.const 0
   i32.ge_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load
   local.get $3
   i32.load offset=4
   i32.lt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load offset=4
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.load offset=8
   local.tee $0
   i32.store
   local.get $0
   local.get $1
   i32.load
   call $~lib/array/Array<u32>#__get
   local.get $2
   i32.eq
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1696
   i32.const 1760
   i32.const 49
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.load offset=12
  local.tee $0
  i32.store
  local.get $0
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  i32.const 2
  i32.and
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 4400
   i32.store
   local.get $0
   i32.const 4576
   i32.store offset=4
   i32.const 4576
   call $~lib/string/String.__concat
   i32.const 1760
   i32.const 125
   i32.const 9
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.load offset=12
  local.tee $0
  i32.store
  local.get $0
  local.get $1
  i32.load
  call $~lib/array/Array<u32>#__get
  local.set $4
  global.get $~lib/memory/__stack_pointer
  call $assembly/component/ComponentType.Get<assembly/index/Cde>
  local.tee $7
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.load offset=12
  local.tee $2
  i32.store offset=12
  local.get $2
  local.get $1
  i32.load
  local.tee $0
  i32.const -2
  local.get $7
  i32.load offset=8
  i32.rotl
  local.get $4
  i32.and
  call $~lib/array/Array<u32>#__set
  local.get $2
  local.get $0
  call $~lib/array/Array<u32>#__get
  local.set $5
  local.get $7
  i32.load8_u offset=4
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 32
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $3
  i32.load offset=20
  local.tee $0
  i32.store
  local.get $2
  local.get $0
  local.get $4
  call $~lib/map/Map<u32,assembly/component/ComponentType>#get
  local.tee $6
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.load offset=20
  local.tee $0
  i32.store
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $5
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $0
  i32.const 15
  i32.shr_u
  local.get $0
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $0
  i32.const 13
  i32.shr_u
  local.get $0
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $0
  i32.const 16
  i32.shr_u
  local.get $0
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $4
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $4
    if
     local.get $4
     i32.load offset=8
     local.tee $0
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $5
      local.get $4
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $0
     i32.const -2
     i32.and
     local.set $4
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $4
  end
  local.get $4
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $3
   i32.load offset=20
   local.tee $0
   i32.store
   local.get $2
   local.get $0
   local.get $5
   call $~lib/map/Map<u32,assembly/component/ComponentType>#get
   local.tee $0
   i32.store offset=20
  else
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $6
   i32.load offset=24
   local.tee $0
   i32.store
   local.get $2
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   i32.const 1
   i32.sub
   call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor
   local.tee $9
   i32.store offset=24
   i32.const 0
   local.set $0
   loop $for-loop|0
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.load offset=24
    local.tee $2
    i32.store
    local.get $2
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 2
    i32.shr_u
    local.get $8
    i32.gt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.tee $4
     local.get $6
     i32.load offset=24
     local.tee $2
     i32.store
     local.get $4
     local.get $2
     local.get $8
     call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get
     local.tee $4
     i32.store offset=28
     local.get $4
     local.get $7
     i32.ne
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $9
      local.get $2
      local.get $4
      call $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__set
     end
     local.get $8
     i32.const 1
     i32.add
     local.set $8
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $9
   call $assembly/archetype/Archetype#constructor
   local.tee $0
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.load offset=20
   local.tee $2
   i32.store
   local.get $2
   local.get $5
   local.get $0
   call $~lib/map/Map<u32,assembly/component/ComponentType>#set
  end
  local.get $0
  local.get $1
  call $assembly/archetype/Archetype#addEntity
  local.get $6
  local.get $0
  local.get $1
  call $assembly/archetype/Archetype#transferAndRemoveEntity
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/ecsTest (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner4
   block $folding-inner3
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $5
    i64.const 0
    i64.store
    local.get $5
    i32.const 0
    i32.store offset=8
    local.get $5
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i32.const 0
    i32.store
    local.get $2
    i32.const 24
    i32.const 5
    call $~lib/rt/itcms/__new
    local.tee $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i64.const 0
    i64.store
    local.get $2
    i32.const 16
    i32.const 6
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    i32.const 0
    i32.store
    local.get $2
    i32.const 0
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $2
    i32.const 0
    i32.store offset=4
    local.get $2
    i32.const 0
    i32.store offset=8
    local.get $2
    i32.const 0
    i32.store offset=12
    global.get $~lib/memory/__stack_pointer
    i32.const 32
    i32.const 0
    call $~lib/rt/itcms/__new
    local.tee $1
    i32.store offset=4
    local.get $1
    i32.const 32
    call $~lib/memory/memory.fill
    local.get $2
    local.get $1
    i32.store
    local.get $2
    local.get $1
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $2
    local.get $1
    i32.store offset=4
    local.get $2
    i32.const 32
    i32.store offset=8
    local.get $2
    i32.const 0
    i32.store offset=12
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    i32.store
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $0
    i32.const 0
    i32.store offset=4
    local.get $0
    call $~lib/array/Array<u32>#constructor
    local.tee $2
    i32.store offset=8
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $0
    call $~lib/array/Array<u32>#constructor
    local.tee $2
    i32.store offset=12
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $0
    i32.const 0
    i32.const 7
    i32.const 1616
    call $~lib/rt/__newArray
    local.tee $2
    i32.store offset=16
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i32.const 0
    i32.store
    local.get $2
    i32.const 24
    i32.const 14
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    i32.const 16
    call $~lib/arraybuffer/ArrayBuffer#constructor
    local.tee $1
    i32.store
    local.get $2
    local.get $1
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $2
    i32.const 3
    i32.store offset=4
    local.get $2
    i32.const 48
    call $~lib/arraybuffer/ArrayBuffer#constructor
    local.tee $1
    i32.store offset=8
    local.get $2
    local.get $1
    i32.const 0
    call $~lib/rt/itcms/__link
    local.get $2
    i32.const 4
    i32.store offset=12
    local.get $2
    i32.const 0
    i32.store offset=16
    local.get $2
    i32.const 0
    i32.store offset=20
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    i32.store offset=20
    local.get $0
    local.get $2
    i32.const 0
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $5
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i64.const 0
    i64.store
    local.get $1
    i32.const 0
    i32.store offset=8
    local.get $1
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i32.const 0
    i32.store
    local.get $2
    i32.const 8
    i32.const 15
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store
    local.get $2
    i32.const 0
    i32.store
    local.get $2
    i32.const 0
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $1
    local.get $2
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load
    local.tee $1
    i32.store offset=4
    local.get $1
    i32.load offset=12
    i32.const 0
    i32.gt_s
    if
     local.get $1
     call $~lib/array/Array<i32>#pop
     local.set $1
    else
     local.get $0
     local.get $0
     i32.load offset=4
     local.tee $1
     i32.const 1
     i32.add
     i32.store offset=4
    end
    local.get $2
    local.get $1
    i32.store
    local.get $2
    i32.load
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $5
    i32.store offset=8
    local.get $5
    i32.load offset=12
    local.get $1
    i32.le_s
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 4764
     i32.lt_s
     br_if $folding-inner3
     global.get $~lib/memory/__stack_pointer
     local.tee $5
     i32.const 0
     i32.store
     local.get $5
     local.get $0
     i32.load offset=8
     local.tee $1
     i32.store
     local.get $1
     i32.load offset=12
     f64.convert_i32_s
     f64.const 1.5
     f64.mul
     f64.floor
     i32.trunc_f64_s
     local.set $1
     local.get $5
     local.get $0
     i32.load offset=8
     local.tee $5
     i32.store
     local.get $5
     local.get $1
     i32.const 0
     call $~lib/array/ensureCapacity
     local.get $5
     local.get $1
     i32.store offset=12
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=12
     local.tee $5
     i32.store
     local.get $5
     local.get $1
     i32.const 0
     call $~lib/array/ensureCapacity
     local.get $5
     local.get $1
     i32.store offset=12
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $1
    i32.store offset=8
    local.get $2
    local.get $1
    local.get $2
    i32.load
    call $~lib/array/Array<u32>#__get
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i64.const 0
    i64.store
    local.get $1
    i32.const 0
    i32.store offset=8
    local.get $2
    if (result i32)
     local.get $2
     i32.load
     i32.const 0
     i32.ge_s
    else
     i32.const 0
    end
    if (result i32)
     local.get $2
     i32.load
     local.get $0
     i32.load offset=4
     i32.lt_s
    else
     i32.const 0
    end
    if (result i32)
     local.get $2
     i32.load offset=4
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=8
     local.tee $5
     i32.store
     local.get $5
     local.get $2
     i32.load
     call $~lib/array/Array<u32>#__get
     local.get $1
     i32.eq
    else
     i32.const 0
    end
    i32.eqz
    br_if $folding-inner4
    global.get $~lib/memory/__stack_pointer
    call $assembly/component/ComponentType.Get<assembly/index/Abc>
    local.tee $1
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    local.get $1
    call $assembly/world/World#_addComponent
    local.tee $5
    i32.store offset=8
    local.get $5
    local.get $2
    local.get $1
    call $assembly/archetype/Archetype#getDataViewPtr
    local.set $4
    local.get $1
    i32.load
    call $~lib/rt/tlsf/__alloc
    local.tee $5
    local.get $4
    local.get $1
    i32.load
    call $~lib/memory/memory.copy
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    call $assembly/world/World#getComponent<assembly/index/Abc>
    local.tee $4
    local.get $5
    i32.eq
    if
     i32.const 0
     i32.const 4512
     i32.const 25
     i32.const 5
     call $~lib/builtins/abort
     unreachable
    end
    local.get $5
    i32.const 123
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4764
    i32.lt_s
    br_if $folding-inner3
    global.get $~lib/memory/__stack_pointer
    i64.const 0
    i64.store
    local.get $0
    local.set $1
    local.get $2
    local.tee $0
    if (result i32)
     local.get $0
     i32.load
     i32.const 0
     i32.ge_s
    else
     i32.const 0
    end
    if (result i32)
     local.get $0
     i32.load
     local.get $1
     i32.load offset=4
     i32.lt_s
    else
     i32.const 0
    end
    if (result i32)
     local.get $0
     i32.load offset=4
     local.set $2
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=8
     local.tee $6
     i32.store
     local.get $6
     local.get $0
     i32.load
     call $~lib/array/Array<u32>#__get
     local.get $2
     i32.eq
    else
     i32.const 0
    end
    i32.eqz
    br_if $folding-inner4
    global.get $~lib/memory/__stack_pointer
    call $assembly/component/ComponentType.Get<assembly/index/Cde>
    local.tee $2
    i32.store offset=4
    local.get $1
    local.get $0
    local.get $2
    call $assembly/world/World#_addComponent
    drop
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $1
    local.set $2
    block $folding-inner00
     local.get $0
     local.tee $1
     if (result i32)
      local.get $1
      i32.load
      i32.const 0
      i32.ge_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load
      local.get $2
      i32.load offset=4
      i32.lt_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load offset=4
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=8
      local.tee $0
      i32.store offset=8
      local.get $0
      local.get $1
      i32.load
      call $~lib/array/Array<u32>#__get
      local.get $6
      i32.eq
     else
      i32.const 0
     end
     i32.eqz
     br_if $folding-inner00
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=12
     local.tee $6
     i32.store offset=8
     local.get $6
     local.get $1
     i32.load
     call $~lib/array/Array<u32>#__get
     i32.const 1
     i32.and
     i32.eqz
     if
      i32.const 0
      i32.const 4512
      i32.const 28
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $5
     i32.load
     i32.const 123
     i32.ne
     if
      i32.const 0
      i32.const 4512
      i32.const 30
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $4
     i32.load
     i32.const 123
     i32.eq
     if
      i32.const 0
      i32.const 4512
      i32.const 31
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 16
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 4764
     i32.lt_s
     br_if $folding-inner3
     global.get $~lib/memory/__stack_pointer
     local.tee $6
     i64.const 0
     i64.store
     local.get $6
     i64.const 0
     i64.store offset=8
     local.get $1
     if (result i32)
      local.get $1
      i32.load
      i32.const 0
      i32.ge_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load
      local.get $2
      i32.load offset=4
      i32.lt_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load offset=4
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=8
      local.tee $0
      i32.store
      local.get $0
      local.get $1
      i32.load
      call $~lib/array/Array<u32>#__get
      local.get $6
      i32.eq
     else
      i32.const 0
     end
     i32.eqz
     br_if $folding-inner4
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=12
     local.tee $6
     i32.store
     local.get $6
     local.get $1
     i32.load
     call $~lib/array/Array<u32>#__get
     i32.const 1
     i32.and
     i32.eqz
     if
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i32.const 4400
      i32.store
      local.get $2
      i32.const 4480
      i32.store offset=4
      i32.const 4480
      call $~lib/string/String.__concat
      i32.const 1760
      i32.const 125
      i32.const 9
      call $~lib/builtins/abort
      unreachable
     end
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=12
     local.tee $6
     i32.store
     local.get $6
     local.get $1
     i32.load
     call $~lib/array/Array<u32>#__get
     local.set $6
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=20
     local.tee $0
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     local.get $6
     call $~lib/map/Map<u32,assembly/component/ComponentType>#get
     local.tee $0
     i32.store offset=8
     global.get $~lib/memory/__stack_pointer
     call $assembly/component/ComponentType.Get<assembly/index/Abc>
     local.tee $6
     i32.store offset=12
     local.get $0
     local.get $1
     local.get $6
     call $assembly/archetype/Archetype#getDataViewPtr
     local.get $5
     local.get $6
     i32.load
     call $~lib/memory/memory.copy
     global.get $~lib/memory/__stack_pointer
     i32.const 16
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $2
     local.get $1
     call $assembly/world/World#getComponent<assembly/index/Abc>
     local.tee $0
     i32.load
     i32.const 123
     i32.ne
     if
      i32.const 0
      i32.const 4512
      i32.const 35
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $2
     local.get $1
     call $assembly/world/World#removeComponent<assembly/index/Cde>
     local.get $1
     if (result i32)
      local.get $1
      i32.load
      i32.const 0
      i32.ge_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load
      local.get $2
      i32.load offset=4
      i32.lt_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load offset=4
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=8
      local.tee $3
      i32.store offset=8
      local.get $3
      local.get $1
      i32.load
      call $~lib/array/Array<u32>#__get
      local.get $6
      i32.eq
     else
      i32.const 0
     end
     i32.eqz
     br_if $folding-inner00
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=12
     local.tee $6
     i32.store offset=8
     local.get $6
     local.get $1
     i32.load
     call $~lib/array/Array<u32>#__get
     i32.const 2
     i32.and
     if
      i32.const 0
      i32.const 4512
      i32.const 38
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $1
     if (result i32)
      local.get $1
      i32.load
      i32.const 0
      i32.ge_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load
      local.get $2
      i32.load offset=4
      i32.lt_s
     else
      i32.const 0
     end
     if (result i32)
      local.get $1
      i32.load offset=4
      local.set $6
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=8
      local.tee $3
      i32.store offset=8
      local.get $3
      local.get $1
      i32.load
      call $~lib/array/Array<u32>#__get
      local.get $6
      i32.eq
     else
      i32.const 0
     end
     i32.eqz
     br_if $folding-inner00
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load offset=12
     local.tee $6
     i32.store offset=8
     local.get $6
     local.get $1
     i32.load
     call $~lib/array/Array<u32>#__get
     i32.const 1
     i32.and
     i32.eqz
     if
      i32.const 0
      i32.const 4512
      i32.const 39
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $2
     local.get $1
     call $assembly/world/World#getComponent<assembly/index/Abc>
     local.tee $2
     i32.load
     i32.const 123
     i32.ne
     if
      i32.const 4608
      i32.const 4512
      i32.const 42
      i32.const 5
      call $~lib/builtins/abort
      unreachable
     end
     local.get $5
     call $assembly/component/IComponentData#dispose
     local.get $4
     call $assembly/component/IComponentData#dispose
     local.get $0
     call $assembly/component/IComponentData#dispose
     local.get $2
     call $assembly/component/IComponentData#dispose
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
     i32.const 1
     return
    end
    br $folding-inner4
   end
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 1696
  i32.const 1760
  i32.const 49
  i32.const 9
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1456
   i32.const 1504
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  call $~lib/memory/memory.fill
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/array/Array<u32>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  i32.const 16
  i32.const 7
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 400
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store offset=4
  local.get $1
  i32.const 400
  call $~lib/memory/memory.fill
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 400
  i32.store offset=8
  local.get $0
  i32.const 100
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $5
  i32.const 0
  i32.store
  local.get $0
  i32.const 2
  i32.shl
  local.tee $4
  local.set $6
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $2
  if
   local.get $3
   local.get $2
   local.get $6
   call $~lib/memory/memory.copy
  end
  local.get $5
  local.get $3
  i32.store
  i32.const 16
  local.get $1
  call $~lib/rt/itcms/__new
  local.tee $1
  local.get $3
  i32.store
  local.get $1
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  local.get $3
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/component/ComponentType#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 12
  i32.const 3
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  i32.const 4
  i32.store
  local.get $1
  i32.const 0
  i32.store8 offset=4
  local.get $1
  local.get $0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/map/Map<u32,assembly/component/ComponentType>#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load
  local.get $1
  local.tee $3
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $1
  local.get $1
  i32.const 15
  i32.shr_u
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $1
  local.get $1
  i32.const 13
  i32.shr_u
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $1
  local.get $1
  i32.const 16
  i32.shr_u
  i32.xor
  local.tee $5
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $1
  block $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
   loop $while-continue|0
    local.get $1
    if
     local.get $1
     i32.load offset=8
     local.tee $4
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $3
      local.get $1
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u32,assembly/component/ComponentType>#find
     local.get $4
     i32.const -2
     i32.and
     local.set $1
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $1
  end
  local.get $1
  if
   local.get $1
   local.get $2
   i32.store offset=4
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
   local.tee $1
   i32.store
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $4
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   i32.const 12
   i32.mul
   local.get $1
   i32.add
   local.tee $1
   local.get $3
   i32.store
   local.get $1
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $1
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   local.get $5
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $0
   i32.load
   i32.store offset=8
   local.get $0
   local.get $1
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 268435455
  i32.gt_u
  if
   i32.const 1456
   i32.const 1936
   i32.const 90
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 2
  i32.shl
  local.tee $1
  i32.const 13
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  local.get $1
  call $~lib/memory/memory.fill
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/staticarray/StaticArray<assembly/component/ComponentType>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1936
   i32.const 115
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load
  local.tee $0
  i32.store
  local.get $0
  i32.eqz
  if
   i32.const 2000
   i32.const 1936
   i32.const 119
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/chunk/Chunk#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store
  local.get $2
  i32.const 16
  i32.const 9
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  i32.const 0
  i32.store
  local.get $2
  i32.const 0
  i32.store offset=4
  local.get $2
  local.get $0
  local.get $1
  i32.mul
  i32.store offset=4
  local.get $2
  local.get $2
  i32.load offset=4
  call $~lib/rt/tlsf/__alloc
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/map/Map<i32,i32>#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load
  local.get $1
  local.tee $3
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $1
  local.get $1
  i32.const 15
  i32.shr_u
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $1
  local.get $1
  i32.const 13
  i32.shr_u
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $1
  local.get $1
  i32.const 16
  i32.shr_u
  i32.xor
  local.tee $5
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $1
  block $__inlined_func$~lib/map/Map<i32,i32>#find
   loop $while-continue|0
    local.get $1
    if
     local.get $1
     i32.load offset=8
     local.tee $4
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $3
      local.get $1
      i32.load
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<i32,i32>#find
     local.get $4
     i32.const -2
     i32.and
     local.set $1
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $1
  end
  local.get $1
  if
   local.get $1
   local.get $2
   i32.store offset=4
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
   local.tee $1
   i32.store
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $4
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   i32.const 12
   i32.mul
   local.get $1
   i32.add
   local.tee $1
   local.get $3
   i32.store
   local.get $1
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $1
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   local.get $5
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $0
   i32.load
   i32.store offset=8
   local.get $0
   local.get $1
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<assembly/chunk/Chunk>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4764
  i32.lt_s
  if
   i32.const 21168
   i32.const 21216
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=12
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1568
   i32.const 107
   i32.const 42
   call $~lib/builtins/abort
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
  local.tee $0
  i32.store
  local.get $0
  i32.eqz
  if
   i32.const 2000
   i32.const 1568
   i32.const 111
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
)
