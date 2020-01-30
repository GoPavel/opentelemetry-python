Search.setIndex({docnames:["index","opentelemetry.context","opentelemetry.context.base_context","opentelemetry.ext.flask","opentelemetry.ext.http_requests","opentelemetry.ext.jaeger","opentelemetry.ext.jaeger.gen.jaeger.ttypes","opentelemetry.ext.opentracing_shim","opentelemetry.ext.pymongo","opentelemetry.ext.wsgi","opentelemetry.metrics","opentelemetry.sdk.context","opentelemetry.sdk.metrics","opentelemetry.sdk.trace","opentelemetry.sdk.trace.export","opentelemetry.trace","opentelemetry.trace.sampling","opentelemetry.trace.status","opentelemetry.util.loader"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","opentelemetry.context.rst","opentelemetry.context.base_context.rst","opentelemetry.ext.flask.rst","opentelemetry.ext.http_requests.rst","opentelemetry.ext.jaeger.rst","opentelemetry.ext.jaeger.gen.jaeger.ttypes.rst","opentelemetry.ext.opentracing_shim.rst","opentelemetry.ext.pymongo.rst","opentelemetry.ext.wsgi.rst","opentelemetry.metrics.rst","opentelemetry.sdk.context.rst","opentelemetry.sdk.metrics.rst","opentelemetry.sdk.trace.rst","opentelemetry.sdk.trace.export.rst","opentelemetry.trace.rst","opentelemetry.trace.sampling.rst","opentelemetry.trace.status.rst","opentelemetry.util.loader.rst"],objects:{"opentelemetry.context":{base_context:[2,0,0,"-"]},"opentelemetry.context.base_context":{BaseRuntimeContext:[2,1,1,""],wrap_callable:[2,3,1,""]},"opentelemetry.context.base_context.BaseRuntimeContext":{Slot:[2,1,1,""],apply:[2,2,1,""],clear:[2,2,1,""],register_slot:[2,2,1,""],snapshot:[2,2,1,""],use:[2,2,1,""],with_current_context:[2,2,1,""]},"opentelemetry.context.base_context.BaseRuntimeContext.Slot":{clear:[2,2,1,""],get:[2,2,1,""],set:[2,2,1,""]},"opentelemetry.ext":{flask:[3,0,0,"-"],http_requests:[4,0,0,"-"],jaeger:[5,0,0,"-"],opentracing_shim:[7,0,0,"-"],pymongo:[8,0,0,"-"],wsgi:[9,0,0,"-"]},"opentelemetry.ext.flask":{instrument_app:[3,3,1,""]},"opentelemetry.ext.http_requests":{disable:[4,3,1,""],enable:[4,3,1,""]},"opentelemetry.ext.jaeger":{AgentClientUDP:[5,1,1,""],Collector:[5,1,1,""],JaegerSpanExporter:[5,1,1,""]},"opentelemetry.ext.jaeger.AgentClientUDP":{emit:[5,2,1,""]},"opentelemetry.ext.jaeger.Collector":{submit:[5,2,1,""]},"opentelemetry.ext.jaeger.JaegerSpanExporter":{"export":[5,2,1,""],agent_client:[5,2,1,""],collector:[5,2,1,""],shutdown:[5,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger":{ttypes:[6,0,0,"-"]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes":{Batch:[6,1,1,""],BatchSubmitResponse:[6,1,1,""],Log:[6,1,1,""],Process:[6,1,1,""],Span:[6,1,1,""],SpanRef:[6,1,1,""],SpanRefType:[6,1,1,""],Tag:[6,1,1,""],TagType:[6,1,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Batch":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.BatchSubmitResponse":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Log":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Process":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Span":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.SpanRef":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.SpanRefType":{CHILD_OF:[6,4,1,""],FOLLOWS_FROM:[6,4,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Tag":{read:[6,2,1,""],thrift_spec:[6,4,1,""],validate:[6,2,1,""],write:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.TagType":{BINARY:[6,4,1,""],BOOL:[6,4,1,""],DOUBLE:[6,4,1,""],LONG:[6,4,1,""],STRING:[6,4,1,""]},"opentelemetry.ext.opentracing_shim":{ScopeManagerShim:[7,1,1,""],ScopeShim:[7,1,1,""],SpanContextShim:[7,1,1,""],SpanShim:[7,1,1,""],TracerShim:[7,1,1,""],create_tracer:[7,3,1,""]},"opentelemetry.ext.opentracing_shim.ScopeManagerShim":{activate:[7,2,1,""],active:[7,2,1,""],tracer:[7,2,1,""]},"opentelemetry.ext.opentracing_shim.ScopeShim":{close:[7,2,1,""],from_context_manager:[7,2,1,""]},"opentelemetry.ext.opentracing_shim.SpanContextShim":{baggage:[7,2,1,""],unwrap:[7,2,1,""]},"opentelemetry.ext.opentracing_shim.SpanShim":{finish:[7,2,1,""],get_baggage_item:[7,2,1,""],log:[7,2,1,""],log_event:[7,2,1,""],log_kv:[7,2,1,""],set_baggage_item:[7,2,1,""],set_operation_name:[7,2,1,""],set_tag:[7,2,1,""],unwrap:[7,2,1,""]},"opentelemetry.ext.opentracing_shim.TracerShim":{extract:[7,2,1,""],inject:[7,2,1,""],start_active_span:[7,2,1,""],start_span:[7,2,1,""],unwrap:[7,2,1,""]},"opentelemetry.ext.pymongo":{CommandTracer:[8,1,1,""],trace_integration:[8,3,1,""]},"opentelemetry.ext.pymongo.CommandTracer":{failed:[8,2,1,""],started:[8,2,1,""],succeeded:[8,2,1,""]},"opentelemetry.ext.wsgi":{OpenTelemetryMiddleware:[9,1,1,""],add_response_attributes:[9,3,1,""],collect_request_attributes:[9,3,1,""],get_default_span_name:[9,3,1,""],get_header_from_environ:[9,3,1,""],http_status_to_canonical_code:[9,3,1,""],setifnotnone:[9,3,1,""]},"opentelemetry.metrics":{Counter:[10,1,1,""],CounterHandle:[10,1,1,""],DefaultLabelSet:[10,1,1,""],DefaultMeter:[10,1,1,""],DefaultMetric:[10,1,1,""],DefaultMetricHandle:[10,1,1,""],Gauge:[10,1,1,""],GaugeHandle:[10,1,1,""],LabelSet:[10,1,1,""],Measure:[10,1,1,""],MeasureHandle:[10,1,1,""],Meter:[10,1,1,""],Metric:[10,1,1,""],meter:[10,3,1,""],set_preferred_meter_implementation:[10,3,1,""]},"opentelemetry.metrics.Counter":{add:[10,2,1,""],get_handle:[10,2,1,""]},"opentelemetry.metrics.CounterHandle":{add:[10,2,1,""]},"opentelemetry.metrics.DefaultMeter":{create_metric:[10,2,1,""],get_label_set:[10,2,1,""],record_batch:[10,2,1,""]},"opentelemetry.metrics.DefaultMetric":{get_handle:[10,2,1,""]},"opentelemetry.metrics.Gauge":{get_handle:[10,2,1,""],set:[10,2,1,""]},"opentelemetry.metrics.GaugeHandle":{set:[10,2,1,""]},"opentelemetry.metrics.Measure":{get_handle:[10,2,1,""],record:[10,2,1,""]},"opentelemetry.metrics.MeasureHandle":{record:[10,2,1,""]},"opentelemetry.metrics.Meter":{create_metric:[10,2,1,""],get_label_set:[10,2,1,""],record_batch:[10,2,1,""]},"opentelemetry.metrics.Metric":{get_handle:[10,2,1,""]},"opentelemetry.sdk":{context:[11,0,0,"-"],metrics:[12,0,0,"-"],trace:[13,0,0,"-"]},"opentelemetry.sdk.metrics":{BaseHandle:[12,1,1,""],Counter:[12,1,1,""],CounterHandle:[12,1,1,""],Gauge:[12,1,1,""],GaugeHandle:[12,1,1,""],LabelSet:[12,1,1,""],Measure:[12,1,1,""],MeasureHandle:[12,1,1,""],Meter:[12,1,1,""],Metric:[12,1,1,""]},"opentelemetry.sdk.metrics.Counter":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,2,1,""],add:[12,2,1,""]},"opentelemetry.sdk.metrics.CounterHandle":{add:[12,2,1,""]},"opentelemetry.sdk.metrics.Gauge":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,2,1,""],set:[12,2,1,""]},"opentelemetry.sdk.metrics.GaugeHandle":{set:[12,2,1,""]},"opentelemetry.sdk.metrics.Measure":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,2,1,""],record:[12,2,1,""]},"opentelemetry.sdk.metrics.MeasureHandle":{record:[12,2,1,""]},"opentelemetry.sdk.metrics.Meter":{create_metric:[12,2,1,""],get_label_set:[12,2,1,""],record_batch:[12,2,1,""]},"opentelemetry.sdk.metrics.Metric":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,2,1,""],get_handle:[12,2,1,""]},"opentelemetry.sdk.trace":{"export":[14,0,0,"-"],InstrumentationInfo:[13,1,1,""],MultiSpanProcessor:[13,1,1,""],Span:[13,1,1,""],SpanProcessor:[13,1,1,""],Tracer:[13,1,1,""],TracerSource:[13,1,1,""],generate_span_id:[13,3,1,""],generate_trace_id:[13,3,1,""]},"opentelemetry.sdk.trace.InstrumentationInfo":{name:[13,2,1,""],version:[13,2,1,""]},"opentelemetry.sdk.trace.MultiSpanProcessor":{add_span_processor:[13,2,1,""],on_end:[13,2,1,""],on_start:[13,2,1,""],shutdown:[13,2,1,""]},"opentelemetry.sdk.trace.Span":{add_event:[13,2,1,""],add_lazy_event:[13,2,1,""],empty_attributes:[13,4,1,""],empty_events:[13,4,1,""],empty_links:[13,4,1,""],end:[13,2,1,""],end_time:[13,2,1,""],get_context:[13,2,1,""],is_recording_events:[13,2,1,""],set_attribute:[13,2,1,""],set_status:[13,2,1,""],start:[13,2,1,""],start_time:[13,2,1,""],update_name:[13,2,1,""]},"opentelemetry.sdk.trace.SpanProcessor":{on_end:[13,2,1,""],on_start:[13,2,1,""],shutdown:[13,2,1,""]},"opentelemetry.sdk.trace.Tracer":{get_current_span:[13,2,1,""],start_as_current_span:[13,2,1,""],start_span:[13,2,1,""],use_span:[13,2,1,""]},"opentelemetry.sdk.trace.TracerSource":{add_span_processor:[13,2,1,""],get_current_span:[13,2,1,""],get_tracer:[13,2,1,""],shutdown:[13,2,1,""]},"opentelemetry.sdk.trace.export":{BatchExportSpanProcessor:[14,1,1,""],ConsoleSpanExporter:[14,1,1,""],SimpleExportSpanProcessor:[14,1,1,""],SpanExportResult:[14,1,1,""],SpanExporter:[14,1,1,""]},"opentelemetry.sdk.trace.export.BatchExportSpanProcessor":{"export":[14,2,1,""],on_end:[14,2,1,""],on_start:[14,2,1,""],shutdown:[14,2,1,""],worker:[14,2,1,""]},"opentelemetry.sdk.trace.export.ConsoleSpanExporter":{"export":[14,2,1,""]},"opentelemetry.sdk.trace.export.SimpleExportSpanProcessor":{on_end:[14,2,1,""],on_start:[14,2,1,""],shutdown:[14,2,1,""]},"opentelemetry.sdk.trace.export.SpanExportResult":{FAILED_NOT_RETRYABLE:[14,4,1,""],FAILED_RETRYABLE:[14,4,1,""],SUCCESS:[14,4,1,""]},"opentelemetry.sdk.trace.export.SpanExporter":{"export":[14,2,1,""],shutdown:[14,2,1,""]},"opentelemetry.trace":{DefaultSpan:[15,1,1,""],DefaultTracer:[15,1,1,""],DefaultTracerSource:[15,1,1,""],Event:[15,1,1,""],Link:[15,1,1,""],Span:[15,1,1,""],SpanContext:[15,1,1,""],SpanKind:[15,1,1,""],TraceOptions:[15,1,1,""],TraceState:[15,1,1,""],Tracer:[15,1,1,""],TracerSource:[15,1,1,""],format_span_id:[15,3,1,""],format_trace_id:[15,3,1,""],sampling:[16,0,0,"-"],set_preferred_tracer_source_implementation:[15,3,1,""],status:[17,0,0,"-"],tracer_source:[15,3,1,""]},"opentelemetry.trace.DefaultSpan":{add_event:[15,2,1,""],add_lazy_event:[15,2,1,""],end:[15,2,1,""],get_context:[15,2,1,""],is_recording_events:[15,2,1,""],set_attribute:[15,2,1,""],set_status:[15,2,1,""],update_name:[15,2,1,""]},"opentelemetry.trace.DefaultTracer":{get_current_span:[15,2,1,""],start_as_current_span:[15,2,1,""],start_span:[15,2,1,""],use_span:[15,2,1,""]},"opentelemetry.trace.DefaultTracerSource":{get_tracer:[15,2,1,""]},"opentelemetry.trace.Event":{attributes:[15,2,1,""],name:[15,2,1,""],timestamp:[15,2,1,""]},"opentelemetry.trace.Link":{attributes:[15,2,1,""],context:[15,2,1,""]},"opentelemetry.trace.Span":{add_event:[15,2,1,""],add_lazy_event:[15,2,1,""],end:[15,2,1,""],get_context:[15,2,1,""],is_recording_events:[15,2,1,""],set_attribute:[15,2,1,""],set_status:[15,2,1,""],update_name:[15,2,1,""]},"opentelemetry.trace.SpanContext":{is_valid:[15,2,1,""]},"opentelemetry.trace.SpanKind":{CLIENT:[15,4,1,""],CONSUMER:[15,4,1,""],INTERNAL:[15,4,1,""],PRODUCER:[15,4,1,""],SERVER:[15,4,1,""]},"opentelemetry.trace.TraceOptions":{DEFAULT:[15,4,1,""],SAMPLED:[15,4,1,""],get_default:[15,2,1,""],sampled:[15,2,1,""]},"opentelemetry.trace.TraceState":{get_default:[15,2,1,""]},"opentelemetry.trace.Tracer":{CURRENT_SPAN:[15,4,1,""],get_current_span:[15,2,1,""],start_as_current_span:[15,2,1,""],start_span:[15,2,1,""],use_span:[15,2,1,""]},"opentelemetry.trace.TracerSource":{get_tracer:[15,2,1,""]},"opentelemetry.trace.sampling":{Decision:[16,1,1,""],ProbabilitySampler:[16,1,1,""],Sampler:[16,1,1,""],StaticSampler:[16,1,1,""]},"opentelemetry.trace.sampling.ProbabilitySampler":{CHECK_BYTES:[16,4,1,""],bound:[16,2,1,""],get_bound_for_rate:[16,2,1,""],rate:[16,2,1,""],should_sample:[16,2,1,""]},"opentelemetry.trace.sampling.Sampler":{should_sample:[16,2,1,""]},"opentelemetry.trace.sampling.StaticSampler":{should_sample:[16,2,1,""]},"opentelemetry.trace.status":{Status:[17,1,1,""],StatusCanonicalCode:[17,1,1,""]},"opentelemetry.trace.status.Status":{canonical_code:[17,2,1,""],description:[17,2,1,""],is_ok:[17,2,1,""]},"opentelemetry.trace.status.StatusCanonicalCode":{ABORTED:[17,4,1,""],ALREADY_EXISTS:[17,4,1,""],CANCELLED:[17,4,1,""],DATA_LOSS:[17,4,1,""],DEADLINE_EXCEEDED:[17,4,1,""],FAILED_PRECONDITION:[17,4,1,""],INTERNAL:[17,4,1,""],INVALID_ARGUMENT:[17,4,1,""],NOT_FOUND:[17,4,1,""],OK:[17,4,1,""],OUT_OF_RANGE:[17,4,1,""],PERMISSION_DENIED:[17,4,1,""],RESOURCE_EXHAUSTED:[17,4,1,""],UNAUTHENTICATED:[17,4,1,""],UNAVAILABLE:[17,4,1,""],UNIMPLEMENTED:[17,4,1,""],UNKNOWN:[17,4,1,""]},"opentelemetry.util":{loader:[18,0,0,"-"]},"opentelemetry.util.loader":{set_preferred_default_implementation:[18,3,1,""]},opentelemetry:{context:[1,0,0,"-"],metrics:[10,0,0,"-"],trace:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0x01":15,"abstract":[1,10,15,16],"case":[7,10],"class":[1,2,5,6,7,8,9,10,12,13,14,15,16,17],"default":[1,2,7,10,12,13,15,18],"enum":[14,15,17],"export":[5,10,13],"final":15,"float":[7,10,13,15,16],"function":[1,3,7,10,13,15,18],"import":[1,7,15,18],"instanceof":18,"int":[7,13,15,16],"long":[1,6,17],"new":[5,7,10,13,15],"null":13,"return":[1,2,5,7,9,10,12,13,14,15,16,17,18],"switch":1,"throw":[13,14],"transient":17,"true":[7,9,10,12,13,15,17,18],"try":15,"while":7,For:[7,10,13,15,17],Its:7,Not:[7,17],That:18,The:[1,2,4,5,7,8,9,10,12,13,14,15,17,18],There:[7,17],Use:17,Used:[7,10],__aenter__:1,__aexit__:1,__enter__:7,__exit__:7,__init__:1,__main__:1,__name__:[1,7,13,15],__repr__:1,_console_lock:1,_implement:18,abc:[10,15,16],abl:7,abort:17,about:[7,13],abov:[7,17,18],abstractcontextmanag:7,accept:[7,10,12],access:[1,15,17],across:[1,15],act:10,activ:[7,13,15],actual:7,add:[9,10,12,13,15,16],add_ev:[13,15],add_lazy_ev:[13,15],add_response_attribut:9,add_span_processor:13,added:13,addit:[7,15],address:17,affect:7,aforement:7,after:[10,15],agenc:5,agent:5,agent_cli:5,agent_host_nam:5,agent_port:5,agentclientudp:5,aggreg:10,algorithm:18,alia:12,all:[1,2,4,10,13,15],allow:[4,7,8,10,12,13,15],allow_redirect:9,alon:15,alreadi:[7,10,15,17],already_exist:17,also:[4,15,17],altern:18,alwai:[7,16,17,18],ani:[7,9,10,13,15,18],annot:[5,9,15],anoth:[1,17],api:[0,5,7,8,10,15,17,18],api_typ:18,appli:[2,16,17],applic:[7,9,13,15],arbitrari:10,arg:1,argument:[7,9,13,15,17,18],arithmet:7,ascii:15,ask:17,assign:15,associ:[7,10,15],async:1,asyncio:1,atexit:13,atom:10,attach:15,attempt:[17,18],attribut:[7,9,13,15,16],auth:5,authent:[5,17],automat:[7,15],avail:[10,15],await:1,back:7,backoff:17,baggag:7,bar:1,base:[2,5,6,7,8,9,10,12,13,14,15,16,17],base_context:1,basehandl:12,baseruntimecontext:2,basic:5,batch:[5,6,10,14],batchexportspanprocessor:14,batchsubmitrespons:6,bear:1,becaus:[7,10,17],becom:15,been:[13,15,17],befor:[7,17],behav:7,behavior:[13,15],behind:7,being:10,belong:[15,17],best:10,between:[7,15,17],binari:[5,6,7],bit:[13,17],bitmask:15,block:[13,14,15],bool:[6,7,10,13,15,16,17],both:[7,10,12],bound:16,boundari:15,boundeddict:13,boundedlist:13,broken:17,broker:15,bug:7,calcul:[9,10],call:[3,4,5,7,10,13,14,15,17,18],callabl:[2,9,10,15],callback:[10,15,18],caller:[15,17],can:[1,2,7,9,10,12,13,14,15,17],cancel:17,cannot:10,canon:17,canonic:10,canonical_cod:17,captur:2,carri:1,carrier:7,cat:1,caus:[7,17],chain:7,chang:[15,17],charact:15,check:17,check_byt:16,child:[7,13,15],child_of:[6,7],children:15,clarif:10,classifi:5,classmethod:[2,7,15,16],clear:2,client:[5,15,17],close:[1,7,15],code:[7,9,17,18],codebas:7,collect:[5,9],collect_request_attribut:9,collector:5,collector_endpoint:5,collector_host_nam:5,collector_port:5,com:[8,15],command:8,commandfailedev:8,commandlisten:8,commandstartedev:8,commandsucceededev:8,commandtrac:8,commun:7,compar:7,complet:17,comput:[7,10],concret:15,concurr:17,condit:17,configur:14,conform:[9,15],consist:[7,15],consol:14,consolespanexport:14,construct:[7,10],constructor:13,consum:15,contain:[5,7],context:[0,7,10,13,15],contextlib:7,contextvar:1,control:[7,15,17],conveni:15,convent:10,convert:[7,17],copi:[13,15],correct:[7,17],correctli:7,correspond:[7,10],corrupt:17,cost:10,could:[1,17],counter:[10,12],counterhandl:[10,12],creat:[1,5,7,10,13,15,16,17,18],create_metr:[10,12],create_trac:7,creation:[9,15],credenti:17,critic:15,current:[2,7,8,10,13,15,17],current_span:[1,15],data:[5,7,14,17],data_loss:17,deactiv:7,deadlin:17,deadline_exceed:17,decid:17,decim:7,decis:16,declar:10,def:[1,18],defaultlabelset:10,defaultmet:10,defaultmetr:10,defaultmetrichandl:10,defaultspan:[13,15],defaulttrac:15,defaulttracersourc:15,defer:10,defin:[7,10,15,18],definit:7,delai:17,delet:17,demo:1,deni:17,depend:[7,13,15],describ:[0,10,15,17],descript:[10,12,17],detach:15,detail:[7,10,15,18],detect:17,determin:7,develop:17,diagnost:14,dic:9,dict:[2,7,10,12,13,15],dictionari:[2,7,9,10,12],differ:[13,15,17],direct:[1,10,15],directli:[7,13,14],directori:17,disabl:4,discard:[10,12],distribut:[15,18],django:9,do_work:15,doc:18,document:[0,7],doe:[7,17,18],doesn:[7,15],dog:1,doing:[13,15],done:17,doubl:6,down:[5,12,13,14],due:[7,17],dummi:1,durat:6,dynam:10,each:15,easi:7,easili:17,effect:10,effort:7,either:[10,15],els:9,emit:5,empti:[9,17],empty_attribut:13,empty_ev:13,empty_link:13,enabl:[4,10,12,17],encod:12,end:[7,13,14,15,17],end_on_exit:[13,15],end_tim:[13,15],endpoint:5,enough:17,enter:1,entir:17,entiti:17,enumer:[14,15],environ:[9,18],epoch:7,equival:15,error:17,etc:[4,17],even:[13,15,17],event:[7,8,13,15],everi:[7,10],exactli:7,exampl:[1,7,10,15,17],exc:1,exc_typ:1,except:[13,14,15],execut:[15,17],exhaust:17,exist:[9,17],exit:[1,13,15],expect:17,experiment:15,expir:17,explicit:[1,7,10,15],explicitli:[1,17],expos:7,express:[7,10],ext:[0,13,15],extract:7,fact:7,factori:[10,15,18],fail:[8,17,18],failed_not_retry:14,failed_precondit:17,failed_retry:14,failur:17,fair:17,fals:[6,7,10,12,13,15,16,17],fast:18,featur:17,field:[6,15],file:17,find:[10,18],finish:[7,13,15,17],finish_on_clos:7,finish_tim:7,first:[13,15,18],fix:17,flag:[6,15,18],flask:[0,9],follow:[7,17,18],follows_from:6,foo:1,format:[1,5,7,14],format_span_id:15,format_trace_id:15,former:7,forth:7,forward:[9,13],found:[7,15,17],framework:9,free:[13,15],from:[1,2,7,9,10,15,17],from_context_manag:7,func:2,further:[13,15],futur:7,gaug:[10,12],gaugehandl:[10,12],gen:5,gener:[7,9,13,15,17],generate_span_id:13,generate_trace_id:13,get:[2,4,7,10,13,15],get_baggage_item:7,get_bound_for_r:16,get_context:[13,15],get_current_span:[13,15],get_default:15,get_default_span_nam:9,get_distribut:[13,15],get_handl:[10,12],get_header_from_environ:9,get_label_set:[10,12],get_opentelemetry_implement:18,get_trac:[7,13,15],getdatafromdb:7,getter:[15,18],github:15,given:[2,10,13,15],global:[1,10,15,18],goe:1,gradual:17,guidelin:17,handl:[7,8,10,13,15],handle_typ:12,hardwar:7,has:[13,15,17,18],have:[7,10,12,15,17],header:9,header_nam:9,helper:1,here:1,higher:17,hold:10,hood:7,hook:13,hors:1,host:5,host_nam:5,how:[1,15],howev:7,html:8,http:[4,5,7,8,9,15],http_request:[0,13,15],http_status_to_canonical_cod:9,http_transport:5,human:10,idempot:17,identifi:[7,13,15,17],ignor:[7,13,15],ignore_active_span:7,ignore_environ:18,immediatelli:18,immut:[10,13,15],implement:[5,7,10,12,13,14,15,17,18],implementation_factori:18,implementor:17,impli:17,implicit:15,imprecis:7,includ:[4,15],incom:9,increas:10,index:0,indic:[15,17,18],info:15,inform:[7,13,15,17],inherit:10,initi:7,inject:7,input:[10,12],instanc:[7,10,13,15,18],instead:[13,15,17],instrument:[4,7,10,13,15],instrument_app:3,instrumentation_info:13,instrumentationinfo:13,instrumenting_library_nam:[13,15],instrumenting_library_vers:[13,15],instrumenting_module_nam:[13,15],integ:7,integr:[0,8],interfac:[10,13,14],intern:[7,13,15,17,18],interpret:18,interv:10,introduc:15,invalid:[15,17],invalid_argu:17,invari:17,invoc:13,invok:[7,9,13,18],involv:7,iprot:6,is_ok:17,is_recording_ev:[13,15],is_valid:15,isn:[7,10,15],issu:[7,17],iter:[2,13,15,17],its:[7,14,15],jaeger:0,jaegerspanexport:5,join:1,just:[13,14,15,17],keep:7,kei:[6,7,9,10,12,13,15],key_valu:7,kind:[10,13,15],known:[10,17],kwarg:[2,7],label:[10,12],label_kei:[10,12],label_set:[10,12],labelset:[10,12],lambda:[2,7],languag:7,larg:7,last:18,latenc:15,later:7,latter:7,layer:1,leav:15,less:7,level:17,librari:[1,4,7,8,13,15],lifecycl:15,lifetim:15,like:[7,13,15,17,18],limit:7,link:[13,15,16],list:[5,7,9,13,14,15],listen:8,load:[10,15,18],loader:[0,10,15],local:1,localhost:5,lock:1,log:[5,6,7],log_ev:7,log_kv:7,look:17,loss:17,made:[4,8,18],mai:[7,10,13,15,17,18],main:1,mainli:[7,18],make:[3,7,15],malform:17,manag:[7,15],manipul:15,manual:15,map:[1,12,16],match:10,max_export_batch_s:14,max_packet_s:5,max_queue_s:14,maximum:5,maxlen:13,mean:[13,17,18],meaning:15,measur:[10,12],measurehandl:[10,12],mechan:15,messag:15,metadata:15,meter:[10,12],method:[7,8,13,14,15],metric:0,metric_kind:10,metric_typ:[10,12],metrichandl:10,metrict:[10,12],microsecond:7,middlewar:9,might:10,migrat:7,minim:7,mock:7,modifi:[13,15,17],modul:[0,13],mongodb:8,monitor:8,monoton:[10,12],more:[7,15,17,18],most:[14,17],msg:1,multipl:[3,10],multiprocess:1,multispanprocessor:13,must:[3,7,14,15,17],my_factory_for_t:18,name:[1,2,5,7,9,10,12,13,15,16,17,18],nanosecond:7,necessari:7,necessarili:15,need:[7,15],neg:[10,12],newli:[15,16],non:[10,12,17],none:[2,5,6,7,8,10,12,13,14,15,16,17,18],nonempti:18,not_found:17,note:[4,7,15,17,18],notion:7,number:7,object:[1,2,3,5,6,7,9,10,12,13,14,15,16,17,18],observ:[7,10],offer:10,offset:17,omit:[7,13,15],on_end:[13,14],on_start:[13,14],onc:10,one:[7,10,15],onli:[4,7,10,12,13,15],opaqu:10,open:15,opentelemetry_python_implementation_:18,opentelemetry_python_implementation_default:18,opentelemetry_python_implementation_tracersourc:18,opentelemetrymiddlewar:9,opentrac:7,opentracing_shim:0,oper:[7,13,15,17],operation_id:1,operation_nam:7,operationnam:6,oprot:6,optim:10,option:[2,7,10,12,13,15,16,17,18],order:13,ordinari:7,otel_context:7,otel_trac:7,otel_tracer_sourc:7,other:[4,7,13,15,17,18],otherwis:[15,17,18],our:7,out:17,out_of_rang:17,over:15,overlap:17,overrid:[13,15,18],own:14,packag:0,packet:5,page:0,pair:[10,15],paramet:[2,5,7,9,10,12,13,14,15,16,17],parent:[1,7,13,15],parent_context:16,parentspanid:6,part:7,pass:[3,7,9,13,14,15],password:5,past:17,patch:4,path:15,payload:7,pep3333:9,pep:9,per:[10,17],perform:7,perhap:17,permiss:17,permission_deni:17,permit:10,perspect:7,pkg_resourc:[13,15],placehold:15,pleas:7,point:7,pool:1,popular:4,port:5,portion:7,posit:[10,12],possibl:7,potenti:10,pre:[10,17],preaggreg:10,predefin:10,present:7,previous:[13,15],previousi:15,print:[1,7,14],printabl:15,println:1,probabilitysampl:16,problem:[7,17],problemat:17,process:[6,7,15],processhttprequest:7,processor:[13,14],produc:15,program:7,propag:[1,15],properti:[5,7,13,15,16,17],protocol:5,provid:[1,2,7,9,10,13,15],pull:15,purpos:[7,14],push:14,pymongo:0,python:[1,7,8,18],queri:[5,18],quota:17,rabbit:1,rais:[13,15,17],random:13,rang:17,rate:16,rather:7,raw:10,read:[6,17],readabl:10,real:7,reason:7,receiv:[13,15,17],recommend:17,record:[10,12,13,14,15],record_batch:[10,12],record_tupl:[10,12],reduc:10,refer:[2,6,7],reftyp:6,regardless:[7,17],regist:[2,13,14],register_slot:2,regular:7,reject:17,relat:[1,7,15],relationship:15,relev:15,remot:[13,15],remov:7,repeat:10,repeatedli:10,replac:15,report:10,repres:[7,10,13,15,17],represent:7,request:[4,7,9,10,13,15,17],requir:[5,7,10,15,17,18],reserv:17,resourc:[13,17],resource_exhaust:17,respons:[9,15,17],response_head:9,restart:17,restrict:15,result:[5,7,14,17],retri:17,retriev:[7,9],rewrit:7,rmdir:17,rollout:17,root:[7,13,15],rtype:13,run:1,runtim:1,safe:17,said:15,same:[3,7,13,15,16,18],sampl:[13,15],sampler:[13,16],satisfi:17,scenario:10,scene:7,schedule_delay_milli:14,scope:7,scope_manager_shim:7,scope_shim:7,scopemanag:7,scopemanagershim:7,scopeshim:7,sdk:[0,5,7,18],search:[0,18],second:7,section:7,see:[7,10,12,13,15,17,18],seek:17,self:1,send:15,sequenc:[10,13,14,15,16,17],serializ:[13,15],seriou:17,server:[5,15,17],servic:[5,7,14,15,17],service_nam:5,servicenam:6,session:4,set:[2,7,10,12,13,15,17,18],set_attribut:[13,15],set_baggage_item:7,set_operation_nam:7,set_preferred_:18,set_preferred_default_implement:18,set_preferred_meter_implement:10,set_preferred_tracer_source_implement:[7,15,18],set_statu:[13,15],set_status_on_except:[13,15],set_tag:7,setifnotnon:9,shim:7,ship:18,should:[7,10,13,14,15,16,17,18],should_sampl:16,shut:[5,13,14],shutdown:[5,13,14],shutdown_on_exit:13,signatur:18,similar:7,simpl:[1,14],simpleexportspanprocessor:14,sinc:[7,17],singl:[9,10,13,15],size:[5,17],skip:18,sleep:[1,7],slight:7,slot:2,snapshot:2,some:[7,15,17],sourc:[2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18],space:17,span:[1,5,6,7,9,13,14,15,16,17],span_cm:7,span_context:7,span_export:14,span_id:[15,16],span_processor:13,spancontext:[7,13,15],spancontextshim:7,spanexport:[5,14],spanexportresult:14,spanid:6,spankind:[13,15],spanprocessor:[13,14],spanref:6,spanreftyp:6,spanshim:7,spec:[10,15],special:10,specif:[15,17],specifi:[7,10,15,17],start:[1,7,8,9,13,14,15],start_active_span:7,start_as_current_span:[13,15],start_respons:9,start_response_statu:9,start_span:[7,13,15],start_tim:[7,13,15],starttim:6,stat:10,state:[7,13,15,17],staticsampl:[13,16],statist:10,statu:[13,15],statuscanonicalcod:17,stdout:14,stem:7,step:18,stop:15,storag:1,store:7,str:[2,7,9,10,12,13,15,16,17],string:[6,9,13,15],submit:5,succeed:8,success:[14,17],successfulli:17,sum:10,support:[7,10,15,17],synchron:[13,14],sys:18,system:[15,17],tag:[6,7],tagtyp:6,target:[1,2],telemetri:[5,14,15],tell:7,term:[1,7],terminolog:10,test:[7,17],testspan:7,text:15,than:7,thei:[13,15,17],them:14,therefor:[7,13,14],thi:[0,3,4,7,9,10,12,13,14,15,17],those:[17,18],though:7,thread:[1,13,14],threadpool:1,thrift:5,thrift_spec:6,thrift_url:5,through:[4,5,9,10,17],throughout:15,thttpclient:5,time:[1,3,7,9,13,15],timestamp:[6,7,13,15],todo:[7,13],too:7,top:1,trace:[0,3,4,5,7,8,18],trace_config:13,trace_id:[15,16],trace_integr:8,trace_opt:15,trace_st:15,traceidhigh:6,traceidlow:6,traceopt:15,tracepar:15,tracer:[7,8,13,14,15],tracer_sourc:[4,7,15,18],tracershim:7,tracersourc:[7,13,15,18],tracest:15,track:9,transact:17,transpar:7,transport:5,tri:18,ttype:5,tupl:[5,10],two:[7,13,15,18],type:[1,2,7,9,10,12,13,14,15,16,17,18],typic:17,udp:5,unauthent:17,unavail:17,uncaught:15,undefin:[13,15],under:7,underli:17,undocu:17,unimpl:[15,17],union:[13,15,16],unit:[10,12],unknown:[15,17],unless:17,unlik:[7,15,17],unrecover:17,unspecifi:10,until:17,unwrap:7,updat:[7,13,15],update_funct:12,update_nam:[13,15],upon:[10,13,15],upstream:15,url:5,usabl:10,usag:7,use:[2,7,10,12,13,15,17,18],use_span:[7,13,15],used:[1,7,9,10,13,14,15,17,18],useful:10,user:[1,5,7,13,17],usernam:5,uses:7,using:[1,7,8,9,10,13,14,15,17],usual:[13,15,18],utf8:6,util:[0,10,15],valid:[6,15,17],valu:[2,7,9,10,12,13,15,17,18],value_typ:[10,12],valuet:10,variabl:18,variou:10,vbinari:6,vbool:6,vdoubl:6,vendor:15,version:[7,13,15],via:[7,13,15],vlong:6,vstr:6,vtype:6,w3c:15,wai:7,wall:[13,15],want:14,welcom:0,well:[7,10],were:[7,13],wether:15,when:[1,5,7,10,12,13,14,15,17,18],where:10,wherea:7,whether:[7,10,13,15,16],which:[7,10,13,15,17,18],whitelist:17,who:17,with_current_context:[1,2],within:[15,17],without:[7,15],won:15,work:[1,4,7],worker:[1,14],wrap:7,wrap_cal:2,wrapper:7,write:[6,17],wsgi:0,yet:[7,10,15],yield:[7,15],you:[3,15],your:15},titles:["OpenTelemetry","opentelemetry.context package","opentelemetry.context.base_context module","opentelemetry.ext.flask package","opentelemetry.ext.http_requests package","opentelemetry.ext.jaeger package","opentelemetry.ext.jaeger.gen.jaeger.ttypes","opentelemetry.ext.opentracing_shim package","opentelemetry.ext.pymongo package","opentelemetry.ext.wsgi package","opentelemetry.metrics package","opentelemetry.sdk.context","opentelemetry.sdk.metrics package","opentelemetry.sdk.trace package","opentelemetry.sdk.trace.export","opentelemetry.trace package","opentelemetry.trace.sampling","opentelemetry.trace.status","opentelemetry.util.loader module"],titleterms:{"export":14,base_context:2,content:[1,3,4,5,6,7,8,9,10,15],context:[1,2,11],ext:[3,4,5,6,7,8,9],flask:3,gen:6,http_request:4,indic:0,jaeger:[5,6],loader:18,metric:[10,12],modul:[1,2,3,4,5,6,7,8,9,10,15,18],opentelemetri:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],opentracing_shim:7,packag:[1,3,4,5,7,8,9,10,12,13,15],pymongo:8,sampl:16,sdk:[11,12,13,14],statu:17,submodul:[1,5,13,15],tabl:0,trace:[13,14,15,16,17],ttype:6,util:18,wsgi:9}})